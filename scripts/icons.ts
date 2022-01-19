import { promises as fs } from 'fs'

import { importDirectory } from '@iconify/tools/lib/import/directory'
import { runSVGO } from '@iconify/tools/lib/optimise/svgo'
import { cleanupSVG } from '@iconify/tools/lib/svg/cleanup'
import svgToMiniDataURI from 'mini-svg-data-uri'

// Inspired by https://antfu.me/posts/icons-in-pure-css

function makeHash(): string {
  return (Math.random() + 1).toString(36).substring(7)
}

;(async () => {
  // Used to generate unique classname and selector
  const buildHash = makeHash()

  // Icon style object
  const iconStyles: {
    [key: string]: {
      mode: string
      dataUri: string
    }
  } = {}

  // Import icons
  const iconSet = await importDirectory('media/icons', {
    prefix: buildHash,
  })

  // Validate, clean up, fix palette and optimize
  await iconSet.forEach(async (name, type) => {
    if (type !== 'icon') {
      return
    }

    const svg = iconSet.toSVG(name)

    if (!svg) {
      // Invalid icon
      iconSet.remove(name)
      return
    }

    // Clean up and optimize icons
    try {
      await cleanupSVG(svg)

      await runSVGO(svg, {
        plugins: [
          'cleanupAttrs',
          'mergeStyles',
          'inlineStyles',
          'removeComments',
          'removeUselessDefs',
          'removeEditorsNSData',
          'removeEmptyAttrs',
          'removeEmptyContainers',
          'convertStyleToAttrs',
          'convertColors',
          'convertTransform',
          'removeUnknownsAndDefaults',
          'removeNonInheritableGroupAttrs',
          'removeUselessStrokeAndFill',
          'removeUnusedNS',
          'cleanupNumericValues',
          'cleanupListOfValues',
          'moveElemsAttrsToGroup',
          'moveGroupAttrsToElems',
          'collapseGroups',
          'sortDefsChildren',
          'sortAttrs',
        ],
      })
    } catch (err) {
      // Invalid icon
      // eslint-disable-next-line no-console
      console.error(`Error parsing ${name}:`, err)

      iconSet.remove(name)

      return
    }

    const svgString = svg.toString()

    // Update icon style object
    iconStyles[name] = {
      mode: svgString.includes('currentColor') ? 'mask' : 'background-img',
      dataUri: svgToMiniDataURI(svgString),
    }

    // Update icon
    iconSet.fromSVG(name, svg)
  })

  // Export as IconifyJSON
  const iconsExport = iconSet.export()
  // const exported = `${JSON.stringify(iconsExport, null, '\t')}\n`

  // Generate types
  const types = `export type IconName = ${Object.keys(iconsExport.icons)
    .map((key) => `'${key}'`)
    .join(' | ')}\n`

  // Save types to file
  await fs.writeFile(`types/icons.d.ts`, types, 'utf8')

  // Generate CSS
  const css = `[class^="z-${buildHash}-icon"] {
  width: 1em;
  height: 1em;
  display: block;
}

.z-icon--inline {
  display: inline-block;
  vertical-align: -0.125em;
}

${Object.entries(iconStyles)
  .map(([key, value]) => {
    return `.z-${buildHash}-icon--${key} {
  --icon-uri: url("${value.dataUri}");

  ${
    value.mode === 'mask'
      ? `mask-image: var(--icon-uri); mask-size: 100% 100%; background-color: currentColor;`
      : `background: var(--icon-uri) no-repeat transparent; background-size: 100% 100%;`
  }
}`
  })
  .join('\n')}
`
  // Save CSS to file
  await fs.writeFile(`styles/icons.css`, css, 'utf8')

  // Save build hash to file
  await fs.writeFile(
    `helpers/icon-hash.ts`,
    `export const hash = '${buildHash}'\n`,
    'utf8'
  )

  // Save JSON of data file
  // await fs.writeFile(`helpers/icon-manifest.json`, exported, 'utf8')
})()

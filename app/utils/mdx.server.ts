import { readFileSync } from 'fs'
import { join } from 'path'

import { bundleMDX } from 'mdx-bundler'

export const compileMDX = async (file: string) => {
  const fullPath = readFileSync(
    join(__dirname, '..', '..', 'app/posts', `${file}.mdx`),
    'utf8'
  )

  const { frontmatter, code } = await bundleMDX({
    source: fullPath,
  })

  return {
    frontmatter,
    code,
  }
}

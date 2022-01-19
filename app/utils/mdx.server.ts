import path from 'path'

import { bundleMDX } from 'mdx-bundler'

export const compileMDX = async (file: string) => {
  const { frontmatter, code } = await bundleMDX({
    file,
    cwd: path.dirname(file),
  })

  return {
    frontmatter,
    code,
  }
}

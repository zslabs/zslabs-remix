import path from 'path'

import { bundleMDX } from 'mdx-bundler'

const postsDirectory = path.join(__dirname, '../../posts')

export const compileMDX = async (file: string) => {
  const fullPath = path.join(postsDirectory, `${file}.mdx`)

  const { frontmatter, code } = await bundleMDX({
    file: fullPath,
  })

  return {
    frontmatter,
    code,
  }
}

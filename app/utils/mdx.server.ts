import path from 'path'

import { bundleMDX } from 'mdx-bundler'

export const compileMDX = async (post: string) => {
  const file = `${__dirname}/../../app/posts/${post}.mdx`

  const { frontmatter, code } = await bundleMDX({
    file,
    cwd: path.dirname(file),
  })

  return {
    frontmatter,
    code,
  }
}

import fs from 'fs'
import path from 'path'

import { bundleMDX } from 'mdx-bundler'

const postsPath = path.join(__dirname, '..', '..', 'posts')

export const compileMDX = async (slug: string) => {
  const filePath = path.join(postsPath, `${slug}.mdx`)
  const source = await fs.readFileSync(filePath, 'utf-8')

  const { frontmatter, code } = await bundleMDX({
    source,
  })

  return {
    frontmatter,
    code,
  }
}

import type { LoaderFunction } from 'remix'
import { Link, useLoaderData } from 'remix'

import MDXContent from '~components/MDXContent'
import Test from '~components/Test'
import { compileMDX } from '~utils/mdx.server'

export const loader: LoaderFunction = async () => {
  const { code } = await compileMDX('hello-world')

  return { code }
}

function Here() {
  const data = useLoaderData()

  return (
    <>
      <Link to="/">Home</Link>
      Here
      <Test />
      <MDXContent content={data.code} />
    </>
  )
}

export default Here

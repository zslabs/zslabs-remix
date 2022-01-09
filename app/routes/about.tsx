// import type { LoaderFunction } from 'remix'
import { Link /* useLoaderData */ } from 'remix'

// import MDXContent from '~/components/MDXContent'
import Test from '~/components/Test'
// import { compileMDX } from '~helpers/mdx.server'

/**

export const loader: LoaderFunction = async () => {
  const { code } = await compileMDX({
    file: 'hello-world.mdx',
  })

  return { code }
}

 */

function About() {
  // const data = useLoaderData()

  return (
    <>
      <Link to="/">Home</Link>
      About
      <Test />
      {/* <MDXContent content={data.code} /> */}
    </>
  )
}

export default About

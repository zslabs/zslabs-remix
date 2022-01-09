import { Link } from 'remix'

import Test from '~/components/Test'

export default function About() {
  return (
    <>
      <Link to="/">Home</Link>
      About
      <Test />
    </>
  )
}

import { Link } from 'remix'

import Test from '~components/Test'

function About() {
  return (
    <>
      <Link to="/">Home</Link>
      About
      <Test />
      About
    </>
  )
}

export default About

import { Link } from 'remix'

import { motion } from 'framer-motion'

import Icon from '~components/Icon'

const exampleInitial = { opacity: 0 }
const exampleAnimate = { opacity: 1 }

function Index() {
  return (
    <>
      <div className="font-bold">Something</div>
      Stuff <code>Coding stuff</code>
      <Link to="about">About</Link>
      <Icon name="scissors" />
      <motion.div initial={exampleInitial} animate={exampleAnimate}>
        hello
      </motion.div>
    </>
  )
}

export default Index

import { Link } from 'remix'

import ctl from '@netlify/classnames-template-literals'
import { motion } from 'framer-motion'

import Icon from '~components/Icon'

function Index() {
  return (
    <>
      <div
        className={ctl(`
          font-bold
        `)}
      >
        Something
      </div>
      Stuff <code>Coding stuff</code>
      <Link to="about">About</Link>
      <Icon name="scissors" />
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        hello
      </motion.div>
    </>
  )
}

export default Index

import { RemixBrowser } from 'remix'

import { MotionConfig } from 'framer-motion'
import { hydrate } from 'react-dom'

import { spring } from '~helpers/styles'

hydrate(
  <MotionConfig transition={spring}>
    <RemixBrowser />
  </MotionConfig>,
  document
)

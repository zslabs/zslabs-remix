import * as React from 'react'

import { hash } from '~helpers/icon-hash'
import type { IconName } from '~types/icons'

interface IconProps {
  name: IconName
  inline?: boolean
  className?: never
  style?: never
}

const Icon = React.forwardRef<HTMLDivElement, IconProps>(
  ({ name, inline, ...rest }, forwardedRef) => {
    return (
      <div
        role="img"
        ref={forwardedRef}
        className={`z-${hash}-icon--${name} ${inline ? 'z-icon--inline' : ''}`}
        {...rest}
      />
    )
  }
)

export default Icon

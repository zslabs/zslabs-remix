import * as React from 'react'

import ctl from '@netlify/classnames-template-literals'

import { hash } from '~helpers/icon-hash'
import type { IconName } from '~types/icons'

interface IconProps extends React.ComponentPropsWithoutRef<'div'> {
  name: IconName
  inline?: boolean
  gradient?: boolean
}

const Icon = React.forwardRef<HTMLDivElement, IconProps>(
  ({ name, inline, gradient, className = '', ...rest }, forwardedRef) => {
    return (
      <div
        role="img"
        ref={forwardedRef}
        className={ctl(`
          z-${hash}-icon--${name}
          ${inline && 'z-icon--inline'}
          ${gradient && 'z-icon--gradient'}
          ${className}
        `)}
        {...rest}
      />
    )
  }
)

export default Icon

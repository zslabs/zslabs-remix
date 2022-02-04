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
  ({ name, inline, gradient, ...rest }, forwardedRef) => {
    const data = {
      [`data-${hash}`]: name,
    }

    return (
      <div
        role="img"
        ref={forwardedRef}
        {...data}
        className={ctl(`
          ${inline && 'is-inline'}
          ${gradient && 'has-gradient'}
        `)}
        {...rest}
      />
    )
  }
)

export default React.memo(Icon)

import { VariantProps } from 'class-variance-authority'
import React, { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'
import { LinkVariants } from './Link.helper'
import '../../styles/global.css'

type LinkProps = React.AnchorHTMLAttributes<HTMLElement> &
  VariantProps<typeof LinkVariants> & {
    // custom types
  }

const Link = forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => {
  const { className, children, colorVariant, size, ...others } = props
  return (
    <a ref={ref} className={twMerge(LinkVariants({ colorVariant, size, className }))} {...others}>
      {children}
    </a>
  )
})

Link.displayName = 'Link'

export { Link }

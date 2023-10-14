import { VariantProps } from 'class-variance-authority'
import React, { forwardRef } from 'react'
import { CardBodyVariants } from '../Card.helper'
import { twMerge } from 'tailwind-merge'
import '../../../../styles/global.css'

type CardBodyProps = React.HTMLProps<HTMLDivElement> &
  VariantProps<typeof CardBodyVariants> & {
    // custom types
  }

export const CardBody = forwardRef<HTMLDivElement, CardBodyProps>((props, ref) => {
  const { className, children, grow, wrap, noWrap, reverseWrap, ...others } = props

  return (
    <div
      ref={ref}
      className={twMerge(CardBodyVariants({ grow, wrap, noWrap, reverseWrap, className }))}
      {...others}
    >
      {children}
    </div>
  )
})

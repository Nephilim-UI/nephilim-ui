import { VariantProps } from 'class-variance-authority'
import React, { forwardRef } from 'react'
import { CardVariants } from './Card.helper'
import { twMerge } from 'tailwind-merge'
import '../../../styles/global.css'

type CardProps = React.HTMLProps<HTMLDivElement> &
  VariantProps<typeof CardVariants> & {
    // custom types
  }

export const Card = forwardRef<HTMLDivElement, CardProps>((props, ref) => {
  const { className, children, height, width, typeVariant, borderColorVariant, raised, ...others } =
    props

  return (
    <div
      ref={ref}
      className={twMerge(
        CardVariants({ height, width, typeVariant, borderColorVariant, raised, className }),
      )}
      {...others}
    >
      {children}
    </div>
  )
})

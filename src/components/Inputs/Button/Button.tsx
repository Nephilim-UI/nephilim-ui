import React, { forwardRef } from 'react'
import { VariantProps } from 'class-variance-authority'
// import clsx from 'clsx'
import '../../../styles/global.css'
import { twMerge } from 'tailwind-merge'
import { ButtonVariants } from './Button.helper'

type ButtonProps = React.ButtonHTMLAttributes<HTMLElement> &
  VariantProps<typeof ButtonVariants> & {
    // loading?: boolean
    // custom types
  }

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { className, variant, size, colorVariant, children, ...others } = props
  return (
    <button
      ref={ref}
      className={twMerge(ButtonVariants({ variant, size, colorVariant, className }))}
      {...others}
    >
      {children}
    </button>
  )
})

Button.displayName = 'Button'

export { Button }

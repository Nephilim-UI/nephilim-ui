import React, { forwardRef } from 'react'
import { VariantProps, cva } from 'class-variance-authority'
import clsx from 'clsx'
import '../../styles/global.css'
import { twMerge } from 'tailwind-merge'

const variants = cva(
  [
    'rounded-md',
    'tracking-wide',
    'inline-flex',
    'items-center',
    'justify-center',
    'gap-2',
    'outline-none',
    'shadow-md',
    'shadow-black/20',
    'transition-all',
    'ease-linear',
    'duration-200',
    'active:scale-[0.98]',
    'cursor-pointer',
    'border-[2px]',
  ],
  {
    variants: {
      variant: {
        filled: ['border-none', '!text-[#fff]'],
        outline: ['!bg-transparent', '!border-solid', '!shadow-none'],
        normal: [],
      },
      size: {
        small: ['py-2', 'px-4', 'leading-5', 'text-sm'],
        medium: ['py-3', 'px-5', 'leading-6', 'text-base'],
        large: ['py-4', 'px-6', 'leading-7', 'text-lg'],
      },
      colorVariant: {
        default: ['bg-purple-600', 'border-purple-600', 'text-purple-600'],
        primary: ['bg-blue-600', 'border-blue-600', 'text-blue-600'],
        secondary: ['bg-green-600', 'border-green-600', 'text-green-600'],
        warning: ['bg-orange-600', 'border-orange-600', 'text-orange-600'],
        danger: ['bg-red-600', 'border-red-600', 'text-red-600'],
      },
    },
    defaultVariants: {
      variant: 'filled',
      size: 'medium',
      colorVariant: 'default',
    },
  },
)

type ButtonProps = React.ButtonHTMLAttributes<HTMLElement> &
  VariantProps<typeof variants> & {
    // loading?: boolean
    // custom types
  }

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { className, variant, size, colorVariant, children, ...others } = props
  return (
    <button
      ref={ref}
      className={twMerge(variants({ variant, size, colorVariant, className }))}
      {...others}
    >
      {children}
    </button>
  )
})

Button.displayName = 'Button'

export { Button }

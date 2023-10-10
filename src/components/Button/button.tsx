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
  ],
  {
    variants: {
      variant: {
        filled: ['bg-[inherit]'],
        outline: ['bg-transparent'],
        normal: [],
      },
      size: {
        small: ['py-2', 'px-4', 'leading-5', 'text-sm'],
        medium: ['py-3', 'px-5', 'leading-6', 'text-base'],
        large: ['py-4', 'px-6', 'leading-7', 'text-lg'],
      },
      colorVariant: {
        default: ['bg-purple-600', 'text-[#fff]'],
        primary: ['bg-blue-600', 'text-[#fff]'],
        secondary: ['bg-green-600', 'text-[#fff]'],
        warning: ['bg-orange-600', 'text-[#fff]'],
        danger: ['bg-red-600', 'text-[#fff]'],
      },
    },
    defaultVariants: {
      variant: 'filled',
      size: 'medium',
      colorVariant: 'default',
    },
  },
)

const Loader = () => (
  <>
    <div className='w-4 h-4 rounded-full border-2 border-b-transparent animate-spin border-[inherit]' />
  </>
)

type ButtonProps = React.ButtonHTMLAttributes<HTMLElement> &
  VariantProps<typeof variants> & {
    loading?: boolean
  }

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { className, variant, size, colorVariant, children, loading, ...others } = props
  return (
    <button
      ref={ref}
      className={twMerge(variants({ variant, size, colorVariant, className }))}
      {...others}
    >
      {loading && <Loader />}
      <span
        className={clsx('transition', {
          'opacity-50': loading,
          'opacity-100': !loading,
        })}
      >
        {children}
      </span>
    </button>
  )
})

Button.displayName = 'Button'

export { Button }

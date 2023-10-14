import { cva } from 'class-variance-authority'

export const InputVariant = cva(
  [
    'w-full',
    'h-full',
    'outline-none',
    'border-[2px]',
    'rounded-md',
    'px-[15px]',
    'focus:border-[2.2px]',
    'disabled:opacity-30',
    'disabled:cursor-not-allowed',
  ],
  {
    variants: {
      colorVariant: {
        default: ['text-gray-600', 'border-gray-600'],
        primary: ['text-blue-600', 'border-blue-600'],
        secondary: ['text-green-600', 'border-green-600'],
        warning: ['text-orange-600', 'border-orange-600'],
        danger: ['text-red-600', 'border-red-600'],
      },
    },
    defaultVariants: {
      colorVariant: 'default',
    },
  },
)

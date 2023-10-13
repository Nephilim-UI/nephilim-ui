import { cva } from 'class-variance-authority'

export const LinkVariants = cva(
  [
    'tracking-wide',
    'leading-relaxed',
    'hover:font-semibold',
    'transition-all',
    'ease-linear',
    'duration-200',
    'cursor-pointer',
  ],
  {
    variants: {
      size: {
        small: ['leading-5', 'text-sm'],
        medium: ['leading-6', 'text-base'],
        large: ['leading-7', 'text-lg'],
      },
      colorVariant: {
        default: ['text-purple-600'],
        primary: ['text-blue-600'],
        secondary: ['text-green-600'],
        warning: ['text-orange-600'],
        danger: ['text-red-600'],
      },
    },
    defaultVariants: {
      size: 'small',
      colorVariant: 'default',
    },
  },
)

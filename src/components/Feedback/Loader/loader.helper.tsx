import { cva } from 'class-variance-authority'

export const LoaderVariant = cva(
  [
    'w-max',
    'rounded-full',
    'border-[3.5px]',
    'border-solid',
    'border-current',
    'border-r-transparent',
    'align-[-0.125em]',
    'animate-spin',
    'motion-reduce:animate-[spin_1.5s_linear_infinite]',
  ],
  {
    variants: {
      LoaderSize: {
        default: ['min-w-[30px]', 'min-h-[30px]'],
        medium: ['min-w-[40px]', 'min-h-[40px]', 'border-[4px]'],
        large: ['min-w-[50px]', 'min-h-[50px]', 'border-[4.5px]'],
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
      LoaderSize: 'default',
      colorVariant: 'default',
    },
  },
)

import { cva } from 'class-variance-authority'

export const SwitchContainerVariant = cva(
  [
    'flex',
    'items-center',
    'justify-between',
    'max-w-max',
    'p-1',
    'rounded-full',
    'text-xs',
    'relative',
    'group',
    'cursor-pointer',
  ],
  {
    variants: {},
    defaultVariants: {},
  },
)

export const SwitchVariant = cva(
  [
    'flex',
    'items-center',
    'bg-gray-300',
    'rounded-full',
    'after:bg-white',
    'after:rounded-full',
    'after:shadow-md',
    'p-1',
    'duration-300',
    'ease-linear',
    'after:duration-300',
    'transition',
    'peer-checked:after:translate-x-full',
    'group-hover:after:translate-x-1',
  ],
  {
    variants: {
      SwitchSize: {
        extraSmall: ['w-8', 'h-5', 'after:h-3', ' after:w-3'],
        small: ['w-10', 'h-6', 'after:h-4', ' after:w-4'],
        medium: ['w-12', 'h-7', 'after:h-5', ' after:w-5'],
        large: ['w-16', 'h-9', 'after:h-7', ' after:w-7'],
        extraLarge: ['w-20', 'h-11', 'after:h-9', ' after:w-9'],
      },
      CheckedSwitchVariant: {
        default: ['peer-checked:bg-purple-500'],
        primary: ['peer-checked:bg-blue-500'],
        secondary: ['peer-checked:bg-green-500'],
        warning: ['peer-checked:bg-orange-500'],
        danger: ['peer-checked:bg-red-500'],
      },
    },
    defaultVariants: {
      SwitchSize: 'small',
      CheckedSwitchVariant: 'default',
    },
  },
)

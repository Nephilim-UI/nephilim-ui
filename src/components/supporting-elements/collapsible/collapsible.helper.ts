import { cva } from 'class-variance-authority'

export const CollapsibleVariants = cva(
  [
    'min-w-[100px]',
    'max-h-max',
    'overflow-hidden',
    'rounded-md',
    'transition-all',
    'ease-linear',
    'duration-100',
    'shadow-black/20',
  ],

  {
    variants: {
      raised: {
        true: ['shadow-xl'],
      },
      typeVariant: {
        default: [''],
        normal: ['shadow-md', 'shadow-black/20'],
        outline: ['shadow-none', 'border-[2px]'],
      },

      width: {
        default: ['w-[300px]'],
        half: ['w-[50%]'],
        full: ['w-full'],
        screen: ['w-screen'],
      },

      TextSize: {
        extrasmall: ['text-xs'],
        small: ['text-sm'],
        medium: ['text-base'],
        large: ['text-lg'],
        extralarge: ['text-xl'],
      },
    },
    defaultVariants: {
      width: 'default',
      raised: false,
      typeVariant: 'default',
      TextSize: 'medium',
    },
  },
)

export const BlockVariant = cva(
  [
    'data-[collapsed="false"]:visible',
    'data-[collapsed="false"]:h-max',
    'data-[collapsed="false"]:py-3',
    'invisible',
    'transition-all',
    'ease-linear',
    'duration-200',
    'h-0',
    'text-base',
    'font-light',
    'bg-purple-300',
    'overflow-hidden',
    'rounded-md',
    'px-3',
    'mt-2',
  ],
  {
    variants: {
      ListColorVariant: {
        default: ['bg-purple-300'],
        primary: ['bg-blue-300'],
        secondary: ['bg-green-300'],
        warning: ['bg-orange-300'],
        danger: ['bg-red-300'],
      },
    },
    defaultVariants: {
      ListColorVariant: 'default',
    },
  },
)

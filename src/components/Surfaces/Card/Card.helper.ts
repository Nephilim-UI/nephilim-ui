import { cva } from 'class-variance-authority'

export const CardVariants = cva(
  [
    'min-w-[100px]',
    'min-h-[150px]',
    'w-[300px]',
    'rounded-lg',
    'px-5',
    'py-4',
    'transition',
    'ease-linear',
    'duration-100',
  ],
  {
    variants: {
      height: {
        default: ['h-[300px]'],
        half: ['h-[50%]'],
        full: ['h-full'],
        screen: ['h-screen'],
      },

      width: {
        default: ['w-[300px]'],
        half: ['w-[50%]'],
        full: ['w-full'],
        screen: ['w-screen'],
      },

      typeVariant: {
        normal: ['shadow-md', 'shadow-black/20'],
        outline: ['shadow-none', 'border-[2px]'],
      },

      borderColorVariant: {
        default: ['border-purple-600'],
        primary: ['border-blue-600'],
        secondary: ['border-green-600'],
        warning: ['border-orange-600'],
        danger: ['border-red-600'],
      },

      raised: {
        true: ['shadow-xl'],
      },
    },
    defaultVariants: {
      height: 'default',
      width: 'default',
      typeVariant: 'normal',
      borderColorVariant: 'default',
      raised: false,
    },
  },
)

export const CardHeaderVariants = cva(['w-full', 'py-4', 'min-h-[150px]'], {
  variants: {
    textAlign: {
      start: ['text-start'],
      center: ['text-center'],
      end: ['text-end'],
    },
  },
  defaultVariants: {
    textAlign: 'start',
  },
})

export const CardBodyVariants = cva(['w-full', 'py-4', 'h-full'], {
  variants: {
    grow: {
      true: ['flex-grow'],
    },
    wrap: {
      true: ['flex-wrap'],
    },
    noWrap: {
      true: ['flex-no-wrap'],
    },
    reverseWrap: {
      true: ['flex-wrap-reverse'],
    },
  },
  defaultVariants: {
    grow: false,
    wrap: false,
    reverseWrap: false,
    noWrap: false,
  },
})

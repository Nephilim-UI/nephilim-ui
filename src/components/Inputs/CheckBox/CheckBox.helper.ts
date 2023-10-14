import { cva } from 'class-variance-authority'

export const CheckBoxVariant = cva(
  [
    `before:content['']`,
    'peer',
    'relative',
    'cursor-pointer',
    'appearance-none',
    'rounded-full',
    'border',
    'border-blue-gray-200',
    'transition-all',
    'before:absolute',
    'before:top-2/4',
    'before:left-2/4',
    'before:block',
    'before:h-10',
    'before:w-10',
    'before:-translate-y-2/4',
    'before:-translate-x-2/4',
    'before:rounded-full',
    'before:bg-blue-gray-500',
    'before:opacity-0',
    'before:transition-opacity',
    'before:duration-200',
    'before:ease-linear',
    'hover:before:opacity-10',
  ],
  {
    variants: {
      checkBoxSize: {
        small: ['h-5', 'w-5', 'before:h-8', 'before:w-8'],
        medium: ['h-6', 'w-6'],
        large: ['h-8', 'w-8', 'before:h-12', 'before:w-12'],
      },
      checkedColor: {
        default: [
          'checked:bg-purple-600',
          'checked:border-purple-600',
          'checked:before:bg-purple-600',
        ],
        primary: ['checked:bg-blue-600', 'checked:border-blue-600', 'checked:before:bg-blue-600'],
        secondary: [
          'checked:bg-green-600',
          'checked:border-green-600',
          'checked:before:bg-green-600',
        ],
        warning: [
          'checked:bg-orange-600',
          'checked:border-orange-600',
          'checked:before:bg-orange-600',
        ],
        danger: ['checked:bg-red-600', 'checked:border-red-600', 'checked:before:bg-red-600'],
      },
    },
    defaultVariants: {
      checkBoxSize: 'small',
      checkedColor: 'default',
    },
  },
)

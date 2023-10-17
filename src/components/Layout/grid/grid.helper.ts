import { cva } from 'class-variance-authority'

export const GridVariants = cva(['grid', 'items-center', 'justify-items-center'], {
  variants: {
    gridColumnsVariant: {
      default: ['grid-cols-3'],
      single: ['grid-cols-1'],
      double: ['grid-cols-2'],
    },
    gridRowVariant: {
      default: ['grid-row-1'],
      triple: ['grid-row-3'],
      double: ['grid-row-2'],
    },
  },
  defaultVariants: {
    gridColumnsVariant: 'default',
    gridRowVariant: 'default',
  },
})

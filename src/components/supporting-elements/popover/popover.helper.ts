import { cva } from 'class-variance-authority'

export const PopoverVariant = cva(
  ['relative', 'ml-[40vw]', 'mt-[20vh]', 'w-max', 'flex', 'item-center', 'justify-center'],
  {
    variants: {},
    defaultVariants: {},
  },
)

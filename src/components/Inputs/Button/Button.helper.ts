import { cva } from "class-variance-authority";

export const ButtonVariants = cva(
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
    'border-[2px]',
  ],
  {
    variants: {
      variant: {
        filled: ['border-none', '!text-[#fff]'],
        outline: ['!bg-transparent', '!border-solid', 'shadow-none'],
        normal: ['!border-none', 'bg-opacity-20', 'shadow-none'],
      },
      size: {
        small: ['py-2', 'px-4', 'leading-5', 'text-sm'],
        medium: ['py-3', 'px-5', 'leading-6', 'text-base'],
        large: ['py-4', 'px-6', 'leading-7', 'text-lg'],
      },
      colorVariant: {
        default: ['bg-purple-600', 'border-purple-600', 'text-purple-600'],
        primary: ['bg-blue-600', 'border-blue-600', 'text-blue-600'],
        secondary: ['bg-green-600', 'border-green-600', 'text-green-600'],
        warning: ['bg-orange-600', 'border-orange-600', 'text-orange-600'],
        danger: ['bg-red-600', 'border-red-600', 'text-red-600'],
      },
    },
    defaultVariants: {
      variant: 'filled',
      size: 'medium',
      colorVariant: 'default',
    },
  },
)

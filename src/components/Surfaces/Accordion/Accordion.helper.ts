import { cva } from 'class-variance-authority'

export const AccVariant = cva(
  [
    'min-w-[100px]',
    'min-h-max',
    'w-[300px]',
    'rounded-md',
    'px-5',
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
      CoverColorVariant: {
        default: ['bg-purple-500/20', 'border-purple-600/50'],
        primary: ['bg-blue-500/20', 'border-blue-600/50'],
        secondary: ['bg-green-500/20', 'border-green-600/50'],
        warning: ['bg-orange-500/20', 'border-orange-600/50'],
        danger: ['bg-red-500/20', 'border-red-600/50'],
      },
    },
    defaultVariants: {
      raised: false,
      typeVariant: 'default',
      CoverColorVariant: 'default',
    },
  },
)

export const AccQueVariant = cva(
  [
    'flex',
    'items-center',
    'justify-between',
    'data-[hidden="false"]:border-b-[2px]',
    'border-black/10',
    'py-3',
    'cursor-pointer',
    'font-medium',
  ],
  {
    variants: {
      QuestionColorVariant: {
        default: ['text-purple-600'],
        primary: ['text-blue-600'],
        secondary: ['text-green-600'],
        warning: ['text-orange-600'],
        danger: ['text-red-600'],
      },
      QuestionTextSize: {
        extrasmall: ['text-xs'],
        small: ['text-sm'],
        medium: ['text-base'],
        large: ['text-lg'],
        extralarge: ['text-xl'],
      },
    },
    defaultVariants: {
      QuestionColorVariant: 'default',
      QuestionTextSize: 'medium',
    },
  },
)

export const AccSolVariant = cva(
  [
    'data-[hidden="false"]:visible',
    'data-[hidden="false"]:h-max',
    'data-[hidden="false"]:py-3',
    'data-[hidden="false"]:border-b-[2px]',
    'border-black/10',
    'invisible',
    'transition-all',
    'ease-linear',
    'duration-200',
    'h-0',
    'text-base',
    'font-light',
    'text-purple-400',
    'overflow-hidden',
  ],
  {
    variants: {
      SolutionColorVariant: {
        default: ['text-purple-600'],
        primary: ['text-blue-600'],
        secondary: ['text-green-600'],
        warning: ['text-orange-600'],
        danger: ['text-red-600'],
      },
      SolutionTextSize: {
        extrasmall: ['text-xs'],
        small: ['text-sm'],
        medium: ['text-base'],
        large: ['text-lg'],
        extralarge: ['text-xl'],
      },
    },
    defaultVariants: {
      SolutionColorVariant: 'default',
      SolutionTextSize: 'small',
    },
  },
)

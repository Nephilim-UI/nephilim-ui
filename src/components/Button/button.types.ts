import { BgColorType, ButtonHTMLType, VariantType } from './button.helper'

export type LegacyVariantType = VariantType | 'danger'

export interface BaseButtonProps {
  bgVariant?: BgColorType
  variant?: VariantType
  disabled?: boolean //add a void function too
  className?: string
  [key: `data-${string}`]: string
  styles?: React.CSSProperties
}

// button also work as link
// merge button and anchor tag attributes

type Merge_html_attributes = Omit<
  React.HTMLAttributes<HTMLElement> &
    React.ButtonHTMLAttributes<HTMLElement> &
    React.AnchorHTMLAttributes<HTMLElement>,
  'type'
>

export interface ButtonProps extends BaseButtonProps, Merge_html_attributes {
  href?: string
  htmlType?: ButtonHTMLType
  children: React.ReactNode
  onClick?: () => void
}

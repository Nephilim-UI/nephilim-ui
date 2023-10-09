declare module '@nephilim-ui/core-ui/Button' {
  import React from 'react'
  interface ButtonProps {
    children: React.ReactNode
    colorVarient?: 'primary' | 'secondary' | 'danger' | 'warning'
    variant?: 'default' | 'filled' | 'outline'
    disabled?: boolean //add a void function too
    className?: string
  }
  const Button: React.FC<ButtonProps>

  export default Button
}

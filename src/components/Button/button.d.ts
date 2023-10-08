declare module '@nephilim-ui/core-ui/Button' {
  import React from 'react'
  interface ButtonProps {
    children: React.ReactNode
    className?: string
    colorVarient?: 'primary' | 'secondary' | 'danger' | 'warning'
  }
  const Button: React.FC<ButtonProps>

  export default Button
}

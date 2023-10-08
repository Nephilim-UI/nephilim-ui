import React from 'react'
import '../../styles/global.css'
import { color_varient } from './button.styles'

export interface ButtonProps {
  children: React.ReactNode
  className?: string
  colorVarient?: 'primary' | 'secondary' | 'danger' | 'warning'
}

export default function button({ children, className, colorVarient }: ButtonProps) {
  return <button className={`${color_varient(colorVarient)} ${className}`}>{children}</button>
}

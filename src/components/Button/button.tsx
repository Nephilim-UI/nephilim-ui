import React from 'react'
import '/styles/global.css'
import { ButtonProps } from '../../../types/button.types'
import { color_varient } from './button.styles'

export default function button({ children, className, colorVarient }: ButtonProps) {
  return <button className={`${color_varient(colorVarient)} ${className}`}>{children}</button>
}

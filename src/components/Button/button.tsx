import React from 'react'
import '/styles/global.css'
import { ButtonProps } from '../../../types/ButtonProps'

export default function button({ children, className, colorVarient }: ButtonProps) {
  return (
    <button
      className={`${colorVarient === 'danger' && 'bg-red-500 text-white'} ${
        colorVarient === 'primary' && 'bg-blue-500 text-white'
      }
      ${colorVarient === 'secondary' && 'bg-green-500 text-white'}
      ${colorVarient === 'warning' && 'bg-orange-500 text-white'}
      ${className}`}
    >
      {children}
    </button>
  )
}

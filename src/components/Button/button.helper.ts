import React from 'react'

const BgColorTypes = ['default', 'primary', 'secondary', 'danger', 'warning'] as const
export type BgColorType = (typeof BgColorTypes)[number]

// variant types
const VariantTypes = ['default', 'filled', 'outline'] as const
export type VariantType = (typeof VariantTypes)[number]

// button types
const ButtonHTMLTypes = ['submit', 'button', 'reset'] as const
export type ButtonHTMLType = (typeof ButtonHTMLTypes)[number]

// color_varient function
export const color_varient = (colorVarient: string | undefined) => {
  if (colorVarient === 'primary') {
    return 'bg-blue-500 text-white'
  } else if (colorVarient === 'secondary') {
    return 'bg-green-500 text-white'
  } else if (colorVarient === 'danger') {
    return 'bg-red-500 text-white'
  } else if (colorVarient === 'warning') {
    return 'bg-orange-500 text-white'
  } else {
    return 'bg-purple-500 text-white'
  }
}

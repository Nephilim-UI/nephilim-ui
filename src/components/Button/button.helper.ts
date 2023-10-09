import React from 'react'

const BgColorTypes = ['default', 'primary', 'secondary', 'danger', 'warning'] as const
export type BgColorType = (typeof BgColorTypes)[number]

// variant types
const VariantTypes = ['default', 'filled', 'outline'] as const
export type VariantType = (typeof VariantTypes)[number]

// button types
const ButtonHTMLTypes = ['submit', 'button', 'reset'] as const
export type ButtonHTMLType = (typeof ButtonHTMLTypes)[number]

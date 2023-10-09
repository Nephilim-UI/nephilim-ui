import React from "react"

// variant types
const VariantTypes = ['default', 'filled', 'outline'] as const
export type VariantType = (typeof VariantTypes)[number]

// button types
const ButtonHTMLTypes = ['submit', 'button', 'reset'] as const
export type ButtonHTMLType = (typeof ButtonHTMLTypes)[number]

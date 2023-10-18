import { VariantProps } from 'class-variance-authority'
import React, { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'
import '../../../styles/global.css'
import { LoaderVariant } from './loader.helper'

type LoaderProps = React.HTMLProps<HTMLDivElement> &
  VariantProps<typeof LoaderVariant> & {
    // custom types
  }

const Loader = forwardRef<HTMLDivElement, LoaderProps>((props, ref) => {
  const { className, children, colorVariant, LoaderSize, ...others } = props

  return (
    <div
      ref={ref}
      {...others}
      className={twMerge(LoaderVariant({ colorVariant, LoaderSize, className }))}
    />
  )
})

Loader.displayName = 'Loader'

export { Loader }

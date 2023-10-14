import { VariantProps } from 'class-variance-authority'
import React, { forwardRef } from 'react'
import { CardHeaderVariants } from '../Card.helper'
import { twMerge } from 'tailwind-merge'
import '../../../../styles/global.css'
import clsx from 'clsx'

type CardHeaderProps = React.HTMLProps<HTMLDivElement> &
  VariantProps<typeof CardHeaderVariants> & {
    // custom types
    title?: string
    subtitle?: string
    customiseTitle?: string
    customiseSubTitle?: string
  }

export const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>((props, ref) => {
  const {
    className,
    children,
    title,
    subtitle,
    customiseTitle,
    customiseSubTitle,
    textAlign,
    ...others
  } = props

  return (
    <div ref={ref} className={twMerge(CardHeaderVariants({ textAlign, className }))} {...others}>
      <p
        className={clsx(
          title && `font-bold capitalize text-2xl leading-relaxed tracking-wide ${customiseTitle}`,
        )}
      >
        {title}
      </p>
      <p
        className={clsx(
          subtitle && `font-normal text-md leading-relaxed tracking-normal ${customiseSubTitle}`,
        )}
      >
        {subtitle}
      </p>
      {children}
    </div>
  )
})

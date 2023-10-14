import { VariantProps } from 'class-variance-authority'
import React, { forwardRef } from 'react'
import { InputVariant } from './InputField.helper'
import { twMerge } from 'tailwind-merge'
import '../../../styles/global.css'
import clsx from 'clsx'

type InputProps = React.HTMLProps<HTMLInputElement> &
  VariantProps<typeof InputVariant> & {
    // custom types
    label?: string
    InputType?: 'text' | 'email' | 'password' | 'number'
    InputWidth?: '100%' | string | undefined
    LabelColor?: string
    LabelBackground?: string | undefined
  }

export const InputField = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    className,
    children,
    label,
    InputType,
    InputWidth,
    colorVariant,
    LabelColor,
    LabelBackground,
    ...others
  } = props

  const labelStyle: React.CSSProperties = {
    color: LabelColor || 'black',
    backgroundColor: LabelBackground || 'white',
  }

  return (
    <div className='data-wrap' style={{ width: InputWidth }}>
      <input
        ref={ref}
        className={twMerge(InputVariant({ className }))}
        {...others}
        type={InputType}
        required
      />
      <label style={labelStyle} htmlFor=''>
        hello world
      </label>
    </div>
  )
})

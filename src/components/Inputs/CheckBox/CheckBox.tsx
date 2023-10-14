import { VariantProps } from 'class-variance-authority'
import React, { forwardRef } from 'react'
import { CheckBoxVariant } from './CheckBox.helper'
import { twMerge } from 'tailwind-merge'
import '../../../styles/global.css'
import clsx from 'clsx'

type CheckBoxProps = React.HTMLProps<HTMLInputElement> &
  VariantProps<typeof CheckBoxVariant> & {
    // custom types
    labelClassName?: string
  }

export const CheckBox = forwardRef<HTMLInputElement, CheckBoxProps>((props, ref) => {
  const { className, children, checkBoxSize, checkedColor, labelClassName, ...others } = props

  return (
    <div className='inline-flex items-center'>
      <label
        className='relative flex cursor-pointer items-center rounded-full p-3'
        htmlFor='checkbox-1'
        data-ripple-dark='true'
      >
        <input
          ref={ref}
          className={twMerge(CheckBoxVariant({ checkBoxSize, checkedColor, className }))}
          {...others}
          type='checkbox'
          id='checkbox-1'
        />
        <div className='pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-3.5 w-3.5'
            viewBox='0 0 20 20'
            fill='currentColor'
            stroke='currentColor'
            strokeWidth='1'
          >
            <path
              fillRule='evenodd'
              d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
              clip-rule='evenodd'
            ></path>
          </svg>
        </div>
      </label>

      <span className={clsx(labelClassName)}>{children}</span>
    </div>
  )
})

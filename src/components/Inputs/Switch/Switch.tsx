import { VariantProps } from 'class-variance-authority'
import React, { forwardRef } from 'react'
import { SwitchContainerVariant, SwitchVariant } from './Switch.helper'
import { twMerge } from 'tailwind-merge'
import '../../../styles/global.css'

type SwitchProps = React.HTMLProps<HTMLInputElement> &
  VariantProps<typeof SwitchContainerVariant> &
  VariantProps<typeof SwitchVariant>

export const Switch = forwardRef<HTMLInputElement, SwitchProps>((props, ref) => {
  const { className, children, SwitchSize, CheckedSwitchVariant, ...others } = props

  // const [check, setCheck] = React.useState(false)

  // const switchStyle: React.CSSProperties = {
  //   backgroundColor: CheckedSwitchBackground || 'rgb(34,197,94)',
  //   opacity: 1,
  // }

  return (
    <label className={twMerge(SwitchContainerVariant())}>
      <input
        ref={ref}
        {...others}
        type='checkbox'
        className='appearance-none peer absolute left-0 top-0 w-full h-full rounded-md cursor-pointer'
      />
      <span
        className={twMerge(SwitchVariant({ className, SwitchSize, CheckedSwitchVariant }))}
      ></span>
    </label>
  )
})

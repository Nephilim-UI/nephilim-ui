import { VariantProps } from 'class-variance-authority'
import React, { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'
import '../../../styles/global.css'
import { AlertVariant } from './Alert.helper'

type AlertProps = React.HTMLProps<HTMLDivElement> &
  VariantProps<typeof AlertVariant> & {
    // custom types
  }

const Alert = forwardRef<HTMLDivElement, AlertProps>((props, ref) => {
  const { className, children, ...others } = props

  return (
    <div ref={ref} {...others} className={twMerge(AlertVariant({ className }))}>
    

     <div className='bg-blue-950 bg-opacity-90 text-white px-4 py-3 rounded-md'>
      {children}
     </div>
    </div>
  )
})

Alert.displayName = 'Alert'

export { Alert }

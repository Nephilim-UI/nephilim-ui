import { VariantProps } from 'class-variance-authority'
import React, { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'
import { PopoverVariant } from './popover.helper'
import '../../../styles/global.css'

type PopoverProps = React.HTMLProps<HTMLDivElement> &
  VariantProps<typeof PopoverVariant> & {
    // custom types
    textColor?: string
    bgColor?: string
  }

const Popover = forwardRef<HTMLDivElement, PopoverProps>((props, ref) => {
  const { className, children, textColor, bgColor, ...others } = props
  const [show, setShow] = React.useState(false)

  const PopStyling: React.CSSProperties = {
    color: textColor,
    backgroundColor: bgColor,
  }

  return (
    <div ref={ref} {...others} className={twMerge(PopoverVariant())}>
      <button
        onClick={() => {
          setShow(!show)
        }}
        style={PopStyling}
        className={`bg-purple-500 bg-opacity-20
           p-2 inline-flex items-center justify-center rounded-full ${
             show && '-rotate-[360deg]'
           } transition-all ease-linear duration-300 `}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth='1.5'
          stroke='currentColor'
          className='w-4 h-4'
        >
          <path strokeLinecap='round' strokeLinejoin='round' d='M19.5 8.25l-7.5 7.5-7.5-7.5' />
        </svg>
      </button>

      <div
        data-show={show}
        style={PopStyling}
        className='bg-purple-600 bg-opacity-20 absolute z-20 min-h-[200px] min-w-[200px] rounded-full shadow-lg  data-[show="true"]:rounded-lg shadow-black/20 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-40%] data-[show="true"]:translate-y-[5%] data-[show="true"]:visible data-[show="true"]:scale-100 data-[show="true"]:mt-3 scale-0 invisible overflow-hidden transition-all ease-linear duration-300'
      >
        {children}
      </div>
    </div>
  )
})

Popover.displayName = 'Popover'

export { Popover }

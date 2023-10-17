import { VariantProps } from 'class-variance-authority'
import React, { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'
import { BlockVariant, CollapsibleVariants } from './collapsible.helper'
import '../../../styles/global.css'

type CollapsibleProps = React.HTMLProps<HTMLDivElement> &
  VariantProps<typeof CollapsibleVariants> & {
    // custom types
  }

const Collapsible = forwardRef<HTMLDivElement, CollapsibleProps>((props, ref) => {
  const { className, children, ...others } = props
  const [collapsed, setCollapsed] = React.useState(true)

  const list = ['this is anshuman', 'this is anshuman']

  return (
    <div
      ref={ref}
      {...others}
      data-collapsed={collapsed}
      className={twMerge(CollapsibleVariants({ className }))}
    >
      <div className='flex items-center justify-end'>
        <button
          onClick={() => {
            setCollapsed(!collapsed)
          }}
          className='bg-purple-200 p-2 rounded-lg inline-flex items-center justify-center'
        >
          {collapsed ? (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='currentColor'
              className='w-4 h-4'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9'
              />
            </svg>
          ) : (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='currentColor'
              className='w-4 h-4'
            >
              <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
            </svg>
          )}
        </button>
      </div>

      <div
        data-collapsed={collapsed}
        className='bg-purple-300 py-3 rounded-md mt-2 px-3 text-sm font-light '
      >
        this is anshuman
      </div>

      {list.map((data: any, i: any) => (
        <div
          key={i}
          data-collapsed={collapsed}
          style={{ transitionDelay: `0.${i}s` }}
          className={twMerge(BlockVariant())}
        >
          {data}
        </div>
      ))}
    </div>
  )
})

Collapsible.displayName = 'Collapsible'

export { Collapsible }

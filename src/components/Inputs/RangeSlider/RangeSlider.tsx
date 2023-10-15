import React, { forwardRef } from 'react'
import '../../../styles/global.css'
import clsx from 'clsx'

type RangeProps = React.HTMLProps<HTMLInputElement> & {
  sliderColor?: string
  height?: string
  width?: string
  steps?: number
}

export const RangeSlider = forwardRef<HTMLInputElement, RangeProps>((props, ref) => {
  const { className, children, sliderColor, height, width, steps, ...others } = props
  const [active, setActive] = React.useState('0')

  const rangeStyle: React.CSSProperties = {
    width: width || '300px',
    height: height || '15px',
    background: `linear-gradient(90deg, ${
      sliderColor ? sliderColor : 'rgb(127, 250, 127)'
    } ${active}%, rgb(231, 231, 231) 
    ${active}%)`,
    WebkitAppearance: 'none',
    WebkitTransition: 'all 0.2s ease',
    borderRadius: '12px',
    padding: '2px',
  }

  return (
    <input
      ref={ref}
      {...others}
      type='range'
      onChange={(e) => setActive(e.target.value)}
      min={'0'}
      value={active}
      max={'100'}
      style={rangeStyle}
      step={steps}
      className={clsx('shadow-sm shadow-black/10', className)}
    />
  )
})

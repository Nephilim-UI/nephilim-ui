import React, { createRef, forwardRef } from 'react'
import '../../styles/global.css'
import omit from 'rc-util/lib/omit'
import { composeRef } from 'rc-util/lib/ref'
import { color_varient } from './button.styles'
import { ButtonProps } from './button.types'

// export const button = ({ children, className, colorVarient }: ButtonProps) => {
//   return <button className={`${color_varient(colorVarient)} ${className}`}>{children}</button>
// }

const Button: React.ForwardRefRenderFunction<HTMLButtonElement | HTMLAnchorElement, ButtonProps> = (
  props,
  ref,
) => {
  const {
    variant = 'default',
    styles,
    disabled = false, //change this
    className,
    children,
    htmlType = 'button',
    style: customStyle = {},
    ...others
  } = props

  const innerRef = createRef<HTMLButtonElement | HTMLAnchorElement>()

  const buttonRef = composeRef(ref, innerRef)

  const handleClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>) => {
    const { onClick } = props

    if (disabled) {
      e.preventDefault()
      return
    }

    ;(onClick as React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>)?.(e)
  }

  const linkButtonRestProps = omit(others as ButtonProps & { navigate: any }, ['navigate'])

  if (linkButtonRestProps.href !== undefined) {
    return (
      <a
        {...linkButtonRestProps}
        onClick={handleClick}
        ref={buttonRef as React.Ref<HTMLAnchorElement>}
        className={`${className}`}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      {...others}
      type={htmlType}
      className={`${className}`}
      onClick={handleClick}
      disabled={disabled}
      ref={buttonRef as React.Ref<HTMLButtonElement>}
    >
      {children}
    </button>
  )
}

export default Button

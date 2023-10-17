import { VariantProps } from 'class-variance-authority'
import React, { forwardRef } from 'react'
import { GridVariants } from './grid.helper'
import { twMerge } from 'tailwind-merge'
import '../../../styles/global.css'

type GridProps = React.HTMLProps<HTMLDivElement> &
  VariantProps<typeof GridVariants> & {
    // custom types
    gridColumns?: number | string | undefined
    gridRows?: number | string | undefined
    rowSpan?: number | string | undefined
    colSpan?: number | string | undefined
  }

const Grid = forwardRef<HTMLDivElement, GridProps>((props, ref) => {
  const {
    className,
    children,
    gridColumns,
    gridRows,
    rowSpan,
    colSpan,
    gridColumnsVariant,
    gridRowVariant,
    ...others
  } = props

  const GridStyle: React.CSSProperties = {
    gridTemplateColumns: `repeat(${gridColumns ? gridColumns : '3'}, minmax(0,1fr))`,
    gridTemplateRows: `repeat(${gridRows ? gridRows : '1'}, minmax(0,1fr))`,
    gridRow: `${rowSpan ? `span ${rowSpan} / span ${rowSpan}` : ''}`,
    gridColumn: `${colSpan ? `span ${colSpan} / span ${colSpan}` : ''}`,
  }

  return (
    <div
      ref={ref}
      style={GridStyle}
      className={twMerge(GridVariants({ gridColumnsVariant, gridRowVariant, className }))}
      {...others}
    >
      {children}
    </div>
  )
})

Grid.displayName = 'Grid'

export { Grid }

import { VariantProps } from 'class-variance-authority'
import '../../../styles/global.css'
import React, { forwardRef } from 'react'
import { AccQueVariant, AccSolVariant, AccVariant } from './Accordion.helper'
import { twMerge } from 'tailwind-merge'

type AccProp = React.HTMLProps<HTMLDivElement> &
  VariantProps<typeof AccVariant> &
  VariantProps<typeof AccQueVariant> &
  VariantProps<typeof AccSolVariant> & {
    Question: string | React.ReactNode
    Solution: string | React.ReactNode
    coverBgColor?: string
    questionBorder?: boolean
    solutionBorder?: boolean
    questionTextMode?: 'lowercase' | 'uppercase' | 'capitalize'
    solutionTextMode?: 'lowercase' | 'uppercase' | 'capitalize'
    questionTextColor?: string
    solutionTextColor?: string
  }

export const Accordion = forwardRef<HTMLDivElement, AccProp>((props, ref) => {
  const {
    className,
    Question,
    Solution,
    coverBgColor,
    raised,
    CoverColorVariant,
    typeVariant,
    QuestionColorVariant,
    questionBorder,
    questionTextMode,
    questionTextColor,
    solutionBorder,
    solutionTextMode,
    solutionTextColor,
    SolutionColorVariant,
    SolutionTextSize,
    ...others
  } = props
  const [hidden, setHidden] = React.useState(true)

  const AccStyle: React.CSSProperties = {
    background: coverBgColor,
  }

  const AccQueStyle: React.CSSProperties = {
    border: `${!questionBorder && 'none'}`,
    textTransform: questionTextMode,
    color: questionTextColor,
  }

  const AccSolStyle: React.CSSProperties = {
    border: `${!solutionBorder && 'none'}`,
    textTransform: solutionTextMode,
    color: solutionTextColor,
  }

  return (
    <div
      ref={ref}
      style={AccStyle}
      {...others}
      className={twMerge(AccVariant({ typeVariant, CoverColorVariant, raised, className }))}
    >
      <div
        onClick={() => {
          setHidden(!hidden)
        }}
        style={AccQueStyle}
        role='button'
        data-hidden={hidden}
        className={twMerge(AccQueVariant({ QuestionColorVariant }))}
      >
        {Question}
        <svg
          data-hidden={hidden}
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth='1.5'
          stroke='currentColor'
          className='w-5 h-5 data-[hidden="false"]:rotate-180 transition-all ease-linear duration-200'
        >
          <path strokeLinecap='round' strokeLinejoin='round' d='M19.5 8.25l-7.5 7.5-7.5-7.5' />
        </svg>
      </div>
      <div
        style={AccSolStyle}
        data-hidden={hidden}
        className={twMerge(AccSolVariant({ SolutionColorVariant, SolutionTextSize }))}
      >
        {Solution}
      </div>
    </div>
  )
})

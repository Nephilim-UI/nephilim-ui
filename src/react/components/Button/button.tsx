import React from 'react'
import '../../../styles/global.css'

type Props = {
  children: React.ReactNode
}

export default function button({ children }: Props) {
  return (
    <button className='bg-neutral-300 text-slate-800 font-semibold font-mono px-2 py-1 border-none outline-none rounded-md text-sm'>
      {children}
    </button>
  )
}

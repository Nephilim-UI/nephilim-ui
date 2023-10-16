import React from 'react'

import { render } from '@testing-library/react'
import { Accordion } from '../src'

describe('Accordion rendering', () => {
  test('Render/Accordion', () => {
    render(<Accordion Question='this is question' Solution='this is solution' />)
  })
})

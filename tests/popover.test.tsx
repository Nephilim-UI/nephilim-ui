import React from 'react'

import { render } from '@testing-library/react'
import { Popover } from '../src'

describe('Popover rendering', () => {
  test('Render/Popover', () => {
    render(<Popover>This is Label</Popover>)
  })
})

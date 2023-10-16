import React from 'react'

import { render } from '@testing-library/react'
import { CheckBox } from '../src'

describe('CheckBox rendering', () => {
  test('Render/CheckBox', () => {
    render(<CheckBox>this is checkbox</CheckBox>)
  })
})

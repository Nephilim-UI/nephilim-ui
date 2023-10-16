import React from 'react'

import { render } from '@testing-library/react'
import { InputField } from '../src'

describe('InputField rendering', () => {
  test('Render/InputField', () => {
    render(<InputField>This is Label</InputField>)
  })
})

import React from 'react'

import { render } from '@testing-library/react'
import { Alert } from '../src'

describe('Alert rendering', () => {
  test('Render/Alert', () => {
    render(<Alert />)
  })
})

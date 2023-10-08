import React from 'react'

import { render } from '@testing-library/react'
import { Button } from '../src'

describe('Button rendering', () => {
  test('Render/Button', () => {
    render(<Button>hello world</Button>)
  })
})

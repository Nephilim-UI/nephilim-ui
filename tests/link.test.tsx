import React from 'react'

import { render } from '@testing-library/react'
import { Link } from '../src'

describe('Link rendering', () => {
  test('Render/Link', () => {
    render(<Link>hello world</Link>)
  })
})

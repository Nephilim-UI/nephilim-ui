import React from 'react'

import { render } from '@testing-library/react'
import { Collapsible } from '../src'

describe('Collapsible rendering', () => {
  test('Render/Collapsible', () => {
    render(<Collapsible list={['hello', 'world', <p>hii</p>]} title='welcome' />)
  })
})

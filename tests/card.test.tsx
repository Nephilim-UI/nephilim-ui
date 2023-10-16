import React from 'react'

import { render } from '@testing-library/react'
import { Card, CardBody, CardHeader } from '../src'

describe('Card rendering', () => {
  test('Render/Card', () => {
    render(<Card>hello world</Card>)
  })
  test('Render/CardHeader', () => {
    render(<CardHeader>hello world</CardHeader>)
  })
  test('Render/CardBody', () => {
    render(<CardBody>hello world</CardBody>)
  })
})

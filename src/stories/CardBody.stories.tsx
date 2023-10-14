import { Meta, StoryObj } from '@storybook/react'
import { CardBody } from '../components'
import React from 'react'

export default {
  title: 'Surfaces/Card/CardBody',
  component: CardBody,
} as Meta<typeof CardBody>

type CardBodyStory = StoryObj<typeof CardBody>

export const Body: CardBodyStory = {
  args: {
    children: 'hello world',
  },
}

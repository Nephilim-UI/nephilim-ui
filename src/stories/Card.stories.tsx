import { Meta, StoryObj } from '@storybook/react'
import { Card, CardHeader } from '../components'
import React from 'react'

export default {
  title: 'Surfaces/Card',
  component: Card,
} as Meta<typeof Card>

type CardStory = StoryObj<typeof Card>

export const CardContainer: CardStory = {
  args: {
    children: 'hello world',
    className: '',
    typeVariant: 'outline',
    borderColorVariant: 'danger',
    raised: false,
    width: 'half',
  },
}

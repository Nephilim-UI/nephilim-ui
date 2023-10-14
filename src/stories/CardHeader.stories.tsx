import { Meta, StoryObj } from '@storybook/react'
import { CardHeader } from '../components'
import React from 'react'

export default {
  title: 'Surfaces/Card/CardHeader',
  component: CardHeader,
} as Meta<typeof CardHeader>

type CardHeaderStory = StoryObj<typeof CardHeader>

export const Header: CardHeaderStory = {
  args: {
    // children: 'hello world',
    title: "what's up people",
    subtitle: 'this is anshuman this side',
    className: '',
    customiseTitle: '',
    customiseSubTitle: '',
    textAlign: 'center',
  },
}

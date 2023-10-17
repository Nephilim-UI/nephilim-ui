import { Meta, StoryObj } from '@storybook/react'
import { Collapsible } from '../components'
import React from 'react'

export default {
  title: 'supporting-elements/Collapsible',
  component: Collapsible,
} as Meta<typeof Collapsible>

type CollapsibleStory = StoryObj<typeof Collapsible>

export const collapse: CollapsibleStory = {
  args: {
    children: '',
    className: '',
  },
}

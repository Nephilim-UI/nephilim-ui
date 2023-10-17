import { Meta, StoryObj } from '@storybook/react'
import { Popover } from '../components'
import React from 'react'

export default {
  title: 'supporting-elements/Popover',
  component: Popover,
} as Meta<typeof Popover>

type PopoverStory = StoryObj<typeof Popover>

export const pop: PopoverStory = {
  args: {
    children: <div>hello world</div>,
    className: '',
    bgColor: '#6fffaed1',
    textColor: '#001814',
  },
}

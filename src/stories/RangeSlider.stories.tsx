import { Meta, StoryObj } from '@storybook/react'
import { RangeSlider } from '../components'
import React from 'react'

export default {
  title: 'Inputs/RangeSlider',
  component: RangeSlider,
} as Meta<typeof RangeSlider>

type RangeSliderStory = StoryObj<typeof RangeSlider>

export const RangeSliderElement: RangeSliderStory = {
  args: {
    children: '',
    className: '',
    width: '100%',
    steps: 10,
  },
}

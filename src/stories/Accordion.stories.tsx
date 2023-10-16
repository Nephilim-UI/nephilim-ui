import { Meta, StoryObj } from '@storybook/react'
import { Accordion } from '../components'
import React from 'react'

export default {
  title: 'Surfaces/Accordion',
  component: Accordion,
} as Meta<typeof Accordion>

type AccordionStory = StoryObj<typeof Accordion>

export const accordion: AccordionStory = {
  args: {
    children: '',
    Question: <div>hello world</div>,
    Solution: <p>this is anshuman</p>,
    className: '',
    questionBorder: true,
    questionTextMode: 'uppercase',
    solutionBorder: false,
    disabled: true,
  },
}

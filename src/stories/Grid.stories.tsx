import { Meta, StoryObj } from '@storybook/react'
import { Grid } from '../components'
import React from 'react'

export default {
  title: 'layout/Grid',
  component: Grid,
} as Meta<typeof Grid>

type Story = StoryObj<typeof Grid>

export const Default: Story = {
  args: {
    children: 'hello world',
    className: '',
  },
}

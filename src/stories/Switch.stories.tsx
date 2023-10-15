import { Meta, StoryObj } from '@storybook/react'
import { Switch } from '../components'
import React from 'react'

export default {
  title: 'Inputs/Switch',
  component: Switch,
} as Meta<typeof Switch>

type SwitchStory = StoryObj<typeof Switch>

export const SwitchElement: SwitchStory = {
  args: {
    children: '',
    className: '',
    SwitchSize: 'medium',
    CheckedSwitchVariant: 'secondary',
  },
}

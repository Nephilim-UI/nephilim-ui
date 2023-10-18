import { Meta, StoryObj } from '@storybook/react'
import { Alert } from '../components'
import React from 'react'

export default {
  title: 'feedback/Alert',
  component: Alert,
} as Meta<typeof Alert>

type AlertStory = StoryObj<typeof Alert>

export const alrt: AlertStory = {
  args: {
    children: 'this is an alert',
    className: '',
  },
}

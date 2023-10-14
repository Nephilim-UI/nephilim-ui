import { Meta, StoryObj } from '@storybook/react'
import { Button } from '../components'

export default {
  title: 'Inputs/Button',
  component: Button,
} as Meta<typeof Button>

type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: {
    children: 'hello world',
    className: '',
    colorVariant: 'default',
    size: 'small',
    variant: 'filled',
  },
}

export const Primary: Story = {
  args: {
    children: 'hello world',
    className: '',
    colorVariant: 'primary',
    size: 'medium',
  },
}

export const Secondary: Story = {
  args: {
    children: 'hello world',
    className: '',
    colorVariant: 'secondary',
    size: 'large',
  },
}

export const Warning: Story = {
  args: {
    children: 'hello world',
    className: '',
    colorVariant: 'warning',
  },
}

export const Danger: Story = {
  args: {
    children: 'hello world',
    className: '',
    colorVariant: 'danger',
  },
}

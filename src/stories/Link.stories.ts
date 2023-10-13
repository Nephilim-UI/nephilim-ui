import { Meta, StoryObj } from '@storybook/react'
import { Link } from '../components'

export default {
  title: 'React/Link',
  component: Link,
} as Meta<typeof Link>

type Story = StoryObj<typeof Link>

export const Default: Story = {
  args: {
    children: 'hello world',
    className: '',
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

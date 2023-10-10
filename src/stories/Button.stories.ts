import { Meta, StoryObj } from '@storybook/react'
import { default as Button } from '../components/Button/button'

export default {
  title: 'React/Button',
  component: Button,
} as Meta<typeof Button>

type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: {
    children: 'hello world',
    className: '',
    onClick: () => alert('hello world'),
    styles: { bgColor: 'black' },
    'aria-checked': 'true',
  },
}

export const Primary: Story = {
  args: {
    children: 'hello world',
    bgVariant: 'primary',
    className: '',
  },
}

export const Secondary: Story = {
  args: {
    children: 'hello world',
    bgVariant: 'secondary',
    className: '',
  },
}

export const Warning: Story = {
  args: {
    children: 'hello world',
    bgVariant: 'warning',
    className: '',
  },
}

export const Danger: Story = {
  args: {
    children: 'hello world',
    bgVariant: 'danger',
    className: '',
  },
}

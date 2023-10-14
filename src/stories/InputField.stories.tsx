import { Meta, StoryObj } from '@storybook/react'
import { InputField } from '../components'

export default {
  title: 'Inputs/InputField',
  component: InputField,
} as Meta<typeof InputField>

type Story = StoryObj<typeof InputField>

export const Default: Story = {
  args: {
    children: 'hello world',
    className: '',
    InputWidth: '100%',
  },
}

import { Meta, StoryObj } from '@storybook/react'
import { CheckBox } from '../components'

export default {
  title: 'Inputs/CheckBox',
  component: CheckBox,
} as Meta<typeof CheckBox>

type Story = StoryObj<typeof CheckBox>

export const Default: Story = {
  args: {
    children: 'hello world',
    className: '',
    checkedColor: 'danger',
    checkBoxSize: 'medium',
    labelClassName: '',
  },
}

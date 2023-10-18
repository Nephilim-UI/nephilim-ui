import { Meta, StoryObj } from '@storybook/react'
import { Loader } from '../components'
import React from 'react'

export default {
  title: 'feedback/Loader',
  component: Loader,
} as Meta<typeof Loader>

type LoaderStory = StoryObj<typeof Loader>

export const load: LoaderStory = {
  args: {
    children: '',
    className: 'text-pink-500',
    LoaderSize: 'default',
    colorVariant: 'default',
  },
}

import type { Meta, StoryObj } from '@storybook/react'

import { Checkbox } from './'

const meta = {
  argTypes: {
    disabled: {
      control: { type: 'radio' },
      options: [true, false],
    },
  },
  component: Checkbox,
  tags: ['autodocs'],
  title: 'Components/Checkbox',
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const DefaultWithLabel: Story = {
  args: {
    label: 'DefaultWithLabel',
  },
}

export const DisabledWithLabel: Story = {
  args: {
    disabled: true,
    label: 'DisabledWithLabel',
  },
}

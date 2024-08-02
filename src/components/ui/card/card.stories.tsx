import type { Meta, StoryObj } from '@storybook/react'

import { Typography } from '@/components/ui/typography'

import { Card } from './'

const meta = {
  component: Card,
  tags: ['autodocs'],
  title: 'Components/Card',
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: <Typography>Card Example</Typography>,
    style: {
      border: '2px solid white',
      height: '250px',
      margin: '0 auto',
      padding: '30px',
      width: '250px',
    },
  },
}

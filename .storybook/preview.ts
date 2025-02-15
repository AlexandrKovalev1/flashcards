import type { Preview } from '@storybook/react'
import '@/styles/index.scss'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/700.css'

import { themes } from '@storybook/theming'

const preview: Preview = {
  parameters: {
    docs: {
      theme: themes.dark,
    },
    backgrounds: {
      default: 'dark',
      values: [
        {
          name: 'dark',
          value: '#000000',
        },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview

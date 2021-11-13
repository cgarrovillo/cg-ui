import React from 'react'

import CGThemeProvider from '../src/theme'

export const decorators = [
  (Story) => (
    <React.StrictMode>
      <CGThemeProvider>{Story()}</CGThemeProvider>
    </React.StrictMode>
  ),
]

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

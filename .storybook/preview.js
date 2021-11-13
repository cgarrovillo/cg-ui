// import CGThemeProvider from '../src/theme'

import { createTheme, ThemeProvider as MThemeProvider } from '@mui/system'
import { ThemeProvider } from '@emotion/react'

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#001e3c',
    },
  },
  typography: {
    fontSize: 36,
  },
})

export const decorators = [
  (Story) => (
    <MThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>{Story()}</ThemeProvider>
    </MThemeProvider>
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

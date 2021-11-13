import React from 'react'
import { createTheme, ThemeProvider } from '@mui/system'

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#001e3c',
    },
  },
})

type Props = {
  children: React.ReactNode
}
const CGThemeProvider = ({ children }: Props) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default CGThemeProvider

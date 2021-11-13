import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import './fonts/PlusJakartaSans.css'

export const theme = createTheme({
  palette: {
    primary: {
      main: '#001e3c',
    },
  },
  typography: {
    fontFamily: [
      'Plus Jakarta Sans',
      '-apple-system',
      'BlinkMacSystemFont',
      'Roboto',
      '"Helvetica Neue"',
      '"Segoe UI"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
})

type Props = {
  children: React.ReactNode
}
const CGThemeProvider = ({ children }: Props) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default CGThemeProvider

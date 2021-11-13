import React from 'react'
import { Button as MButton, ButtonProps } from '@mui/material'

/**
 * Primary UI component for user interaction
 */
const Button = ({ children, type = 'button', variant = 'contained', ...props }: ButtonProps) => {
  return <MButton {...props}>{children}</MButton>
}

export default Button

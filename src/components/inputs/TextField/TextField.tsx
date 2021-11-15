import { TextField as MTextField, TextFieldProps as MTextFieldProps } from '@mui/material'

const TextField = ({ variant = 'outlined', helperText = ' ', ...props }: MTextFieldProps) => {
  return <MTextField variant={variant} helperText={helperText} {...props} />
}

export type TextFieldProps = MTextFieldProps
export default TextField

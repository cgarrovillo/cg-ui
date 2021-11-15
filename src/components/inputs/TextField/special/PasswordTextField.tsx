import { ChangeEventHandler, Dispatch, SetStateAction } from 'react'
import { FormControl, InputLabel, OutlinedInput, InputAdornment, InputProps } from '@mui/material'

import Button from '../../Button/Button'

type PasswordProps = {
  showPassword: boolean
  setShowPassword: Dispatch<SetStateAction<boolean>>
  value: string
  onChange: ChangeEventHandler
}
const PasswordTextField = ({
  showPassword = false,
  setShowPassword,
  value = '',
  onChange,
  ...props
}: PasswordProps & InputProps) => {
  return (
    <FormControl variant="outlined">
      <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
      <OutlinedInput
        id="outlined-adornment-password"
        type={showPassword ? 'text' : 'password'}
        value={value}
        onChange={onChange}
        endAdornment={
          <InputAdornment position="end">
            <Button variant="text" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? 'hide' : 'show'}
            </Button>
          </InputAdornment>
        }
        label="Password"
        {...props}
      />
    </FormControl>
  )
}
export default PasswordTextField

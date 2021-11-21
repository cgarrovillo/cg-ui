import { FormControl, InputLabel, FormHelperText } from '@mui/material'

import SelectInternal from './SelectInternal'

type Props = {
  id: string
  label: string
  helperText: string
  // TODO: Determine children
  children: any
  multiple: boolean
}
const Select = ({ id, label, helperText, children, multiple }: Props) => {
  return (
    <FormControl fullWidth>
      <InputLabel id={id}>{label}</InputLabel>
      <SelectInternal id={id} label={label} multiple={multiple}>
        {children}
      </SelectInternal>
      <FormHelperText>{helperText}</FormHelperText>
    </FormControl>
  )
}

Select.Option = SelectInternal.Option
export default Select

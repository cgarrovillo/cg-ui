import {
  FormControl,
  InputLabel,
  FormHelperText,
  SelectProps as MSelectProps,
  FormHelperTextProps as MFormHelperTextProps,
} from '@mui/material'

import SelectInternal from './SelectInternal'

type Props = {
  id: MSelectProps['id']
  label: MSelectProps['label']
  helperText: MFormHelperTextProps['children']
  children: MSelectProps['children']
  multiple: MSelectProps['multiple']
  onChange: NonNullable<MSelectProps['onChange']>
  value: MSelectProps['value']
}
const Select = ({ id, label, helperText, children, multiple, onChange, value }: Props) => {
  return (
    <FormControl fullWidth>
      <SelectInternal.Label id={id}>{label}</SelectInternal.Label>
      <SelectInternal id={id} label={label} multiple={multiple} onChange={onChange} value={value}>
        {children}
      </SelectInternal>
      <FormHelperText>{helperText}</FormHelperText>
    </FormControl>
  )
}

Select.Option = SelectInternal.Option
export default Select

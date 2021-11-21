/**
 * Internal. Not for public export.
 * Primarily used to determine whether a MUI Select component should be browser-native
 */
import {
  InputLabel as MInputLabel,
  InputLabelProps as MInputLabelProps,
  Select as MSelect,
  SelectProps as MSelectProps,
  MenuItem as MMenuItem,
  MenuItemProps as MMenuItemProps,
} from '@mui/material'
import { DetailedHTMLProps, OptionHTMLAttributes } from 'react'

import UserAgent from '../../../utils/useragent'

type Props = {
  label: string
}
const SelectInternal = ({ id, label, children, multiple }: Props & MSelectProps) => {
  const ua = UserAgent.getInstance()
  const device = ua.getDevice()

  return (
    <MSelect labelId={`${id}-label`} id={id} label={label} native={device.type === 'mobile'} multiple={multiple}>
      {children}
    </MSelect>
  )
}

const Option = ({
  value,
  children,
}: MMenuItemProps | DetailedHTMLProps<OptionHTMLAttributes<HTMLOptionElement>, HTMLOptionElement>) => {
  const ua = UserAgent.getInstance()
  const device = ua.getDevice()
  if (device.type === 'mobile') return <option value={value}>{children}</option>

  return <MMenuItem value={value}>{children}</MMenuItem>
}
SelectInternal.Option = Option

const Label = ({ id, children }: MInputLabelProps) => {
  return (
    <MInputLabel id={`${id}-label`} htmlFor={id}>
      {children}
    </MInputLabel>
  )
}
SelectInternal.Label = Label

export default SelectInternal

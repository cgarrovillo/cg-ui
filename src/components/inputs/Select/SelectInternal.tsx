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
  label: MSelectProps['label']
  onChange: NonNullable<MSelectProps['onChange']>
}
const SelectInternal = ({ id, label, children, multiple, onChange, value }: Props & MSelectProps) => {
  const ua = UserAgent.getInstance()
  const device = ua.getDevice()
  const isMobile = device.type === 'mobile'

  /**
   * Handles the onChange of our Select component, whether it is the native <select> or MUI `<Select>` behaviour.
   * @param event Generic `Event` (unless autofill, where it is a ChangeEvent) and could also be a React.ChangeEvent when it is `<Select native>`
   * @param child The React element selected when `<Select>` **isn't** native
   * @returns
   */
  const handleChange: MSelectProps['onChange'] = (event, child) => {
    if (isMobile) {
      // @ts-ignore MUI Typings are not considering `native`
      const eventSerialized = serializeNativeMultiple(event)
      // @ts-ignore MUI Typings are not considering `native`
      return onChange(eventSerialized, undefined)
    }

    return onChange(event, child)
  }

  /**
   * To keep consistency & reduce friction when implementing onChange handlers while using our `<Select>` component,
   * we handle the onChange behaviour such that a native `onChange` `event.target.value` is consistent with the `event.target.value` of a MUI Select's `onChange`
   * @param event
   * @returns
   */
  const serializeNativeMultiple = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { options } = event.target
    const value: string[] = []
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value)
      }
    }
    // Define the value property directly on the event.target object
    Object.defineProperty(event.target, 'value', { writable: false, value: [...value] })
    return event
  }

  return (
    <MSelect
      labelId={`${id}-label`}
      id={id}
      label={label}
      native={isMobile}
      multiple={multiple}
      onChange={handleChange}
      value={value}
    >
      {children}
    </MSelect>
  )
}

const Option = ({
  value,
  children,
  ...props
}: MMenuItemProps | DetailedHTMLProps<OptionHTMLAttributes<HTMLOptionElement>, HTMLOptionElement>) => {
  const ua = UserAgent.getInstance()
  const device = ua.getDevice()
  if (device.type === 'mobile')
    return (
      <option
        value={value}
        {...(props as DetailedHTMLProps<OptionHTMLAttributes<HTMLOptionElement>, HTMLOptionElement>)}
      >
        {children}
      </option>
    )

  return (
    <MMenuItem value={value} {...(props as MMenuItemProps)}>
      {children}
    </MMenuItem>
  )
}
SelectInternal.Option = Option

const Label = ({ id, children }: MInputLabelProps) => {
  const ua = UserAgent.getInstance()
  const device = ua.getDevice()

  // Despite the `shrink` prop being the only difference, we have to separate the component so that
  // MUI still handles the default behaviour when the parent `<Select>` **isn't** native
  if (device.type === 'mobile')
    return (
      <MInputLabel id={`${id}-label`} htmlFor={id} shrink>
        {children}
      </MInputLabel>
    )

  return (
    <MInputLabel id={`${id}-label`} htmlFor={id}>
      {children}
    </MInputLabel>
  )
}
SelectInternal.Label = Label

export default SelectInternal

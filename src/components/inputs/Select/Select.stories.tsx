import { useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { SelectChangeEvent, SelectProps } from '@mui/material'
import { Box } from '@mui/system'

import Select from './Select'
import SelectInternal from './SelectInternal'

export default {
  title: 'Inputs/Select',
  component: Select,
  args: {
    label: 'This is a label',
  },
} as ComponentMeta<typeof Select>

const Template: ComponentStory<typeof Select> = (args) => {
  const [value, setValue] = useState('')

  const handleChange = (event: SelectChangeEvent<unknown>) => {
    setValue(event.target.value as string)
  }

  return (
    <Box sx={{ minWidth: 120 }}>
      <Select {...args} value={value} onChange={handleChange}>
        <SelectInternal.Option value={10}>10</SelectInternal.Option>
        <SelectInternal.Option value={20}>20</SelectInternal.Option>
        <SelectInternal.Option value={30}>30</SelectInternal.Option>
      </Select>
    </Box>
  )
}

export const Default = Template.bind({})

export const Multiple: ComponentStory<typeof Select> = (args) => {
  const [selectedValue, setSelectedValue] = useState<string[]>([])

  const handleChange: SelectProps['onChange'] = (event) => {
    const value = event.target.value as string | typeof selectedValue
    setSelectedValue(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    )
  }

  return (
    <Box sx={{ minWidth: 120 }}>
      <Select {...args} value={selectedValue} onChange={handleChange} multiple>
        <Select.Option value={10}>10</Select.Option>
        <Select.Option value={20}>20</Select.Option>
        <Select.Option value={30}>30</Select.Option>
      </Select>
    </Box>
  )
}

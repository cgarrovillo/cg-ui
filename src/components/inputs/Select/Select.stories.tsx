import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Box } from '@mui/system'

import Select from './Select'

export default {
  title: 'Inputs/Select',
  component: Select,
} as ComponentMeta<typeof Select>

const Template: ComponentStory<typeof Select> = (args) => {
  return (
    <Box sx={{ minWidth: 120 }}>
      <Select {...args}>
        <Select.Option value={10}>10</Select.Option>
        <Select.Option value={20}>20</Select.Option>
        <Select.Option value={30}>30</Select.Option>
      </Select>
    </Box>
  )
}

export const Default = Template.bind({})
Default.args = {
  label: 'This is a label test',
}

export const Multiple = Template.bind({})
Multiple.args = {
  ...Default.args,
  multiple: true,
}

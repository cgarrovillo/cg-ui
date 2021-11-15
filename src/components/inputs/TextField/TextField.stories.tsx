import { ComponentStory, ComponentMeta } from '@storybook/react'

import TextField from './TextField'

export default {
  title: 'Inputs/TextField',
  component: TextField,
} as ComponentMeta<typeof TextField>

const Template: ComponentStory<typeof TextField> = (args) => <TextField {...args} />

export const Default = Template.bind({})
Default.args = {
  label: 'First Name',
}

export const HelperText = Template.bind({})
HelperText.args = {
  label: 'Business Number',
  helperText: 'This is a helper text that is limited to only a few characters.',
}

export const Error = Template.bind({})
Error.args = {
  label: 'Email address',
  type: 'email',
  error: true,
  helperText: 'Error text in place of placeholder text',
}

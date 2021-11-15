import { ComponentStory, ComponentMeta } from '@storybook/react'

import Checkbox from './Checkbox'

export default {
  title: 'Inputs/Checkbox',
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>

const Template: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args} />

export const Default = Template.bind({})

export const WithLabel = Template.bind({})
WithLabel.args = {
  label: 'This is a label',
}

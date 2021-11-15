import { ComponentStory, ComponentMeta } from '@storybook/react'

import Chip from './Chip'

export default {
  title: 'Data Display/Chip',
  component: Chip,
} as ComponentMeta<typeof Chip>

const Template: ComponentStory<typeof Chip> = (args) => <Chip {...args} />

export const Default = Template.bind({})
Default.args = {
  label: 'Chip Label',
  // Workaround MUI bug
  // @ts-ignore
  onDelete: null,
}

export const Clickable = Template.bind({})
Clickable.args = {
  label: 'Clickable',
  // @ts-ignore
  onDelete: null,
  onClick: () => {},
}

export const Deletable = Template.bind({})
Deletable.argTypes = { onClick: { action: 'clicked' } }
Deletable.parameters = { actions: { argTypesRegex: '^on.*' } }
Deletable.args = {
  label: 'Deletable',
  onDelete: () => {},
}

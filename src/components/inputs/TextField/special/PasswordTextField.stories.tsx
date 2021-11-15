import { ChangeEvent, useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import PasswordTextField from './PasswordTextField'

export default {
  title: 'Inputs/TextField/Special/PasswordTextField',
  component: PasswordTextField,
} as ComponentMeta<typeof PasswordTextField>

// const Template: ComponentStory<typeof PasswordTextField> = (args) => <PasswordTextField {...args} />

export const Default = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [password, setPassword] = useState('')
  return (
    <PasswordTextField
      showPassword={showPassword}
      setShowPassword={setShowPassword}
      value={password}
      onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
    />
  )
}

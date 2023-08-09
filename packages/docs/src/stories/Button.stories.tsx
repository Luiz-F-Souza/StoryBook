import { StoryObj, Meta } from "@storybook/react"
import { Button, ButtonProps } from '@lfsouza/react'

export default {
  title: "Form/Button",
  component: Button,

  args:{
    children: "Send",
    variant: "primary",
    size: "md",
    disabled: false
  },

  argTypes: {
    variant:{
      options: ['primary', 'seccondary', 'tertiary'],
      control:{
        type: 'inline-radio'
      }
    },
    size:{
      options: ['sm', 'md'],
      control:{
        type: 'inline-radio'
      }
    },
    disabled: {
      control: { type: 'boolean'}
    },
    onClick: {
      action: "click"
    }
  }
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {

}

export const PrimaryDisabled: StoryObj<ButtonProps> = {
  args:{
    disabled: true
  }
}

export const Seccondary: StoryObj<ButtonProps> = {
  args:{
    variant: 'seccondary',
    children: "Create new"
  }
}

export const Tertiary: StoryObj<ButtonProps> = {
  args:{
    variant: 'tertiary',
    children: "Cancel"
  }
}

export const Small: StoryObj<ButtonProps> = {
  args:{
    size: "sm"
  }
}


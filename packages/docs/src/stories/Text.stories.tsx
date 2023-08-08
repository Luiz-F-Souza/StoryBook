import { StoryObj, Meta } from "@storybook/react"
import { Text, TextProps } from '@lfsouza/react'

export default {
  title: "Typography/Text",
  component: Text,

  args:{
    children: "Exemplo de texto"
  }
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {

}
import { StoryObj, Meta } from "@storybook/react"
import { Avatar, AvatarProps } from '@lfsouza/react'

export default {
  title: "Data display/Avatar",
  component: Avatar,

  args:{
    src: "https://github.com/Luiz-F-Souza.png",
    alt: "Luiz Felipe de Souza Barbosa"
  }
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {

}

export const fallback: StoryObj<AvatarProps> = {
  args:{
    src: undefined,
    alt: undefined
  }
}
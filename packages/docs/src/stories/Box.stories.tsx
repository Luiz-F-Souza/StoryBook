import { StoryObj, Meta } from "@storybook/react"
import { Box, BoxProps } from '@lfsouza/react'

export default {
  title: "Surfaces/Box",
  component: Box,

  args:{
    children:   (
      <>
        <span>Testando o elemento Box</span>
      </>
    )
  }
} as Meta

export const Primary: StoryObj<BoxProps> = {

}
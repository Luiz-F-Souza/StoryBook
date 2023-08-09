import { StoryObj, Meta } from "@storybook/react"
import { Box, Text, CheckBox, CheckBoxProps } from '@lfsouza/react'

export default {
  title: "Form/CheckBox ",
  component: CheckBox,

  args:{
   
  },
  decorators: [
    (Story) => {
      return(
        <Box as="label" css={{display: "flex", flexDirection: "row", gap: "$2"}}>
          <Text>Accept terms of use</Text>
          {Story()}
        </Box>
      )
    }
  ]
} as Meta<CheckBoxProps>

export const Primary: StoryObj<CheckBoxProps> = {

}

  

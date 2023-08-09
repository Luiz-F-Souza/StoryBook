import { StoryObj, Meta } from "@storybook/react"
import { Box, Text, TextInput, TextInputProps } from '@lfsouza/react'

export default {
  title: "From/TextInput ",
  component: TextInput,

  args:{
   
  },
  decorators: [
    (Story) => {
      return(
        <Box as="label" css={{display: "flex", flexDirection: "column", gap: "$2"}}>
          <Text>Email adress</Text>
          {Story()}
        </Box>
      )
    }
  ]
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {
  args:{
    placeholder: "Type your name"
  }
}

export const Disabled: StoryObj<TextInputProps> = {
  args:{
    disabled: true
  }
}

export const WithPrefix: StoryObj<TextInputProps> = {
  args:{
    prefix: "cal.com/"
  }
}
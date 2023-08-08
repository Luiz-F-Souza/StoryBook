import { StoryObj, Meta } from "@storybook/react"
import { Heading, HeadingProps } from '@lfsouza/react'

export default {
  title: "Typography/Heading",
  component: Heading,

  args:{
    children: "Exemplo de Heading"
  }
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {

}

export const customTag: StoryObj<HeadingProps> = {
  args: {
    children: "H1 Heading",
    as: 'h1',
    size: '6xl'
  },
  parameters:{
    docs:{
      description:{
        story: 'Por padrão o heading sempre será `h2`, mas podemos alterar isso com a propriedade `as`'
      }
    }
  }
}
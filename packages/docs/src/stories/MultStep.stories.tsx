import { StoryObj, Meta } from "@storybook/react";
import { Box, Text, MultStep, MultStepProps } from "@lfsouza/react";

export default {
  title: "Form/Mult Step ",
  component: MultStep,

  args: {
    size: 4,
    currentStep: 1,
  },
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: "flex", flexDirection: "column", gap: "$2" }}
        >
          {Story()}
        </Box>
      );
    },
  ],
} as Meta<MultStepProps>;

export const Primary: StoryObj<MultStepProps> = {
  args: {},
};

export const Full: StoryObj<MultStepProps> = {
  args: {
    currentStep: 4
  },
};

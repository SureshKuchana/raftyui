import { Meta, StoryObj } from "@storybook/react";
import { Progress } from "@rafty/ui";

const meta: Meta<typeof Progress> = {
  title: "Components / Progress",
  args: {
    size: "md",
    colorScheme: "primary",
    // isIndeterminate: false,
  },
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    colorScheme: {
      control: "select",
      options: ["primary", "warning", "success", "error"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Progress>;

export const Default: Story = {
  render: ({ size, colorScheme }) => (
    <Progress colorScheme={colorScheme} size={size} value={20} />
  ),
};

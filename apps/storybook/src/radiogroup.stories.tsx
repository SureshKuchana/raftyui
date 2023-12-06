import { RadioGroup, RadioGroupItem } from "@rafty/ui";
import { Meta, StoryObj } from "@storybook/react";
import { boolean } from "zod";

const meta: Meta<typeof RadioGroup> = {
  title: "Form / RadioGroup",
  args: {
    size: "md",
    isDisabled: false,
    required: false,
    orientation: "horizontal",
  },
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
    },
    isDisabled: boolean,
  },
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
  render: ({ size, isDisabled, required, orientation }) => (
    <RadioGroup
      defaultValue="comfortable"
      size={size}
      isDisabled={isDisabled}
      required={required}
      orientation={orientation}
    >
      <RadioGroupItem value="default" id="default">
        Default
      </RadioGroupItem>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="comfortable" id="comfortable">
          Comfortable
        </RadioGroupItem>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="compact" id="compact">
          Compact
        </RadioGroupItem>
      </div>
    </RadioGroup>
  ),
};

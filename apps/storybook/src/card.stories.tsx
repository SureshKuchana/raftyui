import { Meta, StoryObj } from "@storybook/react";
import { Card, CardContent, CardFooter, CardHeader, Button } from "@rafty/ui";

const meta: Meta<typeof Card> = {
  title: "Components / Card",
  args: {
    variant: "outline",
    size: "md",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["outline", "elevated", "solid"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: ({ variant, size }) => (
    <Card
      className="dark:border-secondary-700 rounded-md border"
      variant={variant}
      size={size}
    >
      <CardHeader>Customer dashboard</CardHeader>
      <CardContent>
        View a summary of all your customers over the last month. Lorem, ipsum
        dolor sit amet consectetur adipisicing elit. Nesciunt, nam? Lorem ipsum
        dolor sit, amet consectetur adipisicing elit. Officia, eveniet culpa
        minima ipsa rem in mollitia inventore laboriosam necessitatibus itaque.
      </CardContent>
      <CardFooter className="flex">
        <Button variant="outline" colorScheme="error">
          Delete
        </Button>
        <div className="flex-1" />
        <Button variant="outline">View here</Button>
      </CardFooter>
    </Card>
  ),
};
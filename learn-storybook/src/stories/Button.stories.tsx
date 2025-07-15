import { Meta, StoryObj } from "@storybook/react-webpack5";
import { ComponentProps } from "react";
import { Button } from "../components/Button";

type StoryProps = ComponentProps<typeof Button> & {
  buttonText: string;
};

const meta: Meta<StoryProps> = {
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: "select",
      },
      options: ["primary", "secondary"],
    },
    size: {
      control: {
        type: "select",
      },
      options: ["sm", "md", "lg"],
    },
  },
};

type Story = StoryObj<StoryProps>;

export const Primary: Story = {
  args: {
    buttonText: "Hello",
    variant: "primary",
    size: "md",
  },
  render: ({ buttonText, ...args }) => <Button {...args}>{buttonText}</Button>,
};
export default meta;

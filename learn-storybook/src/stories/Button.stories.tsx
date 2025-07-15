import { Meta, StoryObj } from "@storybook/react-webpack5";
import { fn } from "storybook/test";
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
  args: {
    onClick: fn(),
  },
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Primary: Story = {
  args: {
    buttonText: "Hello",
    variant: "primary",
    size: "sm",
  },
  render: ({ buttonText, ...args }) => <Button {...args}>{buttonText}</Button>,
};
export const Secondary: Story = {
  args: {
    buttonText: "Hello",
    variant: "secondary",
    size: "sm",
  },
  render: ({ buttonText, ...args }) => <Button {...args}>{buttonText}</Button>,
};

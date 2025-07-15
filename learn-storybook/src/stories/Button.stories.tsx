import { Meta, StoryObj } from "@storybook/react-webpack5";
import { ComponentProps } from "react";
import { Button } from "../components/Button";

type StoryProps = ComponentProps<typeof Button>;

const meta: Meta<StoryProps> = {
  component: Button,
};

type Story = StoryObj<StoryProps>;

export const Primary: Story = {
  args: {
    variant: "primary",
    size: "md",
  },
  render: (args) => <Button {...args}>Test</Button>,
};
export default meta;

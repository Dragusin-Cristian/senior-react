import { Meta, StoryObj } from "@storybook/react-webpack5";
import Button from "components/common/Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    as: {
      control: "select",
      options: ["button", "a"],
      description: "The underlying HTML element",
    },
    children: {
      control: "text",
      description: "Content inside the button",
    },
    href: {
      control: "text",
      description: "Only applies when `as='a'`",
      if: { arg: "as", eq: "a" },
    },
    onClick: {
      action: "clicked",
      description: "Click handler",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const DefaultButton: Story = {
  args: {
    as: "button",
    children: "Click Me",
  },
};

export const ClickableButton: Story = {
  args: {
    as: "button",
    children: "Click Handler",
    onClick: () => alert("Button clicked!"),
  },
};

export const LinkButton: Story = {
  args: {
    as: "a",
    children: "Go to Google",
    href: "https://google.com",
    target: "_blank",
    rel: "noopener noreferrer",
  },
};

export const DisabledButton: Story = {
  args: {
    as: "button",
    children: "Disabled",
    disabled: true,
  },
};

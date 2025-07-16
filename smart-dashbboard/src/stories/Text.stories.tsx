import { Meta, StoryObj } from "@storybook/react-webpack5";
import Text from "components/common/Text";

const meta: Meta<typeof Text> = {
  title: "Components/Text",
  component: Text,
  tags: ["autodocs"],
  argTypes: {
    as: {
      control: "select",
      options: ["heading", "title", "subtitle", "body", "small"],
      description: "Visual and semantic style of the text",
    },
    children: {
      control: "text",
      description: "Text content",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Text>;

export const Heading: Story = {
  args: {
    as: "heading",
    children: "This is a Heading",
  },
};

export const Title: Story = {
  args: {
    as: "title",
    children: "This is a Title",
  },
};

export const Subtitle: Story = {
  args: {
    as: "subtitle",
    children: "This is a Subtitle",
  },
};

export const Body: Story = {
  args: {
    as: "body",
    children: "This is a paragraph of body text.",
  },
};

export const Small: Story = {
  args: {
    as: "small",
    children: "This is small text, often used for captions or fine print.",
  },
};

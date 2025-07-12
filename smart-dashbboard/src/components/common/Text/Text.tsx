import React, { JSX } from "react";
import { StyledText } from "./Text.styles";

type As = "heading" | "title" | "subtitle" | "body" | "small";

type Props = {
  as?: As;
  children: React.ReactNode;
};

const asMap: Record<As, keyof JSX.IntrinsicElements> = {
  heading: "h1",
  title: "h3",
  subtitle: "h5",
  body: "p",
  small: "small",
};

const Text = ({ as = "body", children, ...rest }: Props) => {
  const Component = asMap[as];
  return (
    <StyledText>
      <Component {...rest}>{children}</Component>
    </StyledText>
  );
};

export default Text;

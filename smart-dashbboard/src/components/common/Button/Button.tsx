import React, { ComponentPropsWithoutRef } from "react";
import { StyledButton } from "./Button.styles";

type As = "button" | "a";

type PropsMap = {
  button: ComponentPropsWithoutRef<"button">;
  a: ComponentPropsWithoutRef<"a">;
};

type ButtonProps<T extends As> = {
  as?: T;
  children: React.ReactNode;
} & PropsMap[T];

const Button = <T extends As>({
  as = "button" as T,
  children,
  ...rest
}: ButtonProps<T>) => {
  const Component = as;

  return (
    <StyledButton>
      <Component {...(rest as any)}>{children}</Component>
    </StyledButton>
  );
};

export default Button;

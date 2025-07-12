import React, { ReactNode, ReactElement, isValidElement } from "react";
import {
  BodyWrapper,
  Card,
  FooterWrapper,
  HeaderWrapper,
} from "./CardLayout.styles";

const Header: React.FC<{ children: ReactNode }> = ({ children }) => (
  <>{children}</>
);
const Body: React.FC<{ children: ReactNode }> = ({ children }) => (
  <>{children}</>
);
const Footer: React.FC<{ children: ReactNode }> = ({ children }) => (
  <>{children}</>
);

type CardLayoutProps = {
  children: ReactNode;
};

const CardLayout: React.FC<CardLayoutProps> & {
  Header: typeof Header;
  Body: typeof Body;
  Footer: typeof Footer;
} = ({ children }) => {
  const childrenArray = React.Children.toArray(children).filter(isValidElement);

  const getChildOfType = (
    type: React.FC<{
      children: ReactNode;
    }>
  ) =>
    childrenArray.find(
      (child): child is ReactElement<{ children: React.ReactNode }> =>
        child.type === type
    );

  const header = getChildOfType(Header);
  const body = getChildOfType(Body)!;
  const footer = getChildOfType(Footer)!;

  return (
    <Card>
      {header && <HeaderWrapper>{header.props.children}</HeaderWrapper>}
      {body && <BodyWrapper>{body.props.children}</BodyWrapper>}
      {footer && <FooterWrapper>{footer.props.children}</FooterWrapper>}
    </Card>
  );
};

CardLayout.Header = Header;
CardLayout.Body = Body;
CardLayout.Footer = Footer;

export default CardLayout;

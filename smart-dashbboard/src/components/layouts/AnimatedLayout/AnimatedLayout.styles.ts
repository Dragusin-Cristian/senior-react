import styled, { css } from "styled-components";

export const AnimatedConatiner = styled.div<{ animate: boolean }>`
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.3s ease, transform 0.3s ease;

  ${({ animate }) =>
    animate &&
    css`
      opacity: 1;
      transform: translateY(0);
    `}
`;

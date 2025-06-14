import React from 'react'

import styled from "styled-components";
import { typescale } from '../utils';

export const Button = styled.button`
  font-size: ${typescale.paragraph};
  border-radius: 3px;
  padding: 9px 13px;
  cursor: pointer;
  transition: background-color 0.3s linear, color 0.3s linear;

  &:hover {
    background-color: ${(props) => props.theme.primaryHoverColor};
    color: ${(props) => props.theme.textColorPrimary};
  }

  &:focus {
    outline: 4px solid ${(props) => props.theme.primaryHoverColor};
    outline-offset: 3px;
  }

  &:active {
    background-color: ${(props) => props.theme.primaryActiveColor};
    border-color: ${(props) => props.theme.primaryActiveColor};
    color: ${(props) => props.theme.textColorPrimary};
  }

  &:disabled {
    cursor: not-allowed;
    background: none;
    color: ${(props) => props.theme.textColorDisabled};
    border: none;
  }
`;

export const PrimaryButton = styled(Button)`
  background-color: ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.textColorPrimary};
  border: 3px solid transparent;

  &:disabled {
    background-color: ${(props) => props.theme.primaryDisabledColor};
    color: ${(props) => props.theme.textColorPrimary};
    border-color: ${(props) => props.theme.primaryDisabledColor};
  }

  &.large {
    font-size: ${typescale.header4};
    padding: 16px 24px;
  }

  &.small {
    font-size: ${typescale.text};
    padding: 8px;
  }
`;

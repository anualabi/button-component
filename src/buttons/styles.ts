import styled, { css } from "styled-components";
import { ButtonProps } from './';
import { DEFAULT_COLOR, DEFAULT_DARK_COLOR, DARK_TEXT, PRIMARY_TEXT, LIGHT_BLUE, GRAY_TEXT } from "../utils/styles"

const variantStyles = (p: ButtonProps) => {
  let color = PRIMARY_TEXT;
  let backgroundColor = "transparent";
  let bgHoverColor = LIGHT_BLUE;
  let border = `2px solid ${PRIMARY_TEXT}`;
  let boxShadow = "none";

  if (p.variant === 'default') {
    color = DARK_TEXT;
    backgroundColor = DEFAULT_COLOR;
    border = "none";
    boxShadow = "0px 2px 3px rgba(51, 51, 51, 0.2)";
    bgHoverColor = DEFAULT_DARK_COLOR;
  } else if (p.variant === "text") {
    border = "none"
    boxShadow = "none"
  }

  return css`
    color: ${color};
    background-color: ${backgroundColor};
    border: ${border};
    box-shadow: ${boxShadow};

    &:hover,
    &:focus {
      background-color: ${bgHoverColor};
    }
  `
}

export const StyledButton = styled.button<ButtonProps>`
  border-radius: 6px;
  box-shadow: 0px 2px 3px rgba(51, 51, 51, 0.2);
  cursor: pointer;
  text-align: center;
  min-width: ${(p) => {
    if(p.size === "lg") {
      return "93px"
    } else if (p.size === "sm") {
      return "73px"
    }
    return "81px"
  }};
  min-height: ${(p) => {
    if(p.size === "lg") {
      return "42px"
    } else if (p.size === "sm") {
      return "32px"
    }
    return "36px"
  }};
  display: flex;
  justify-content: center;
  align-items: center;

  .start-icon {
    margin-right: .3rem;
  }

  .end-icon {
    margin-left: .3rem;
  }

  &:disabled {
    background-color: ${p => p.variant !== "text" && DEFAULT_COLOR};
    border: none;
    box-shawodow: none;
    color: ${GRAY_TEXT};
    cursor: inherit;
    
    &:hover {
      background-color: ${DEFAULT_COLOR};
    }
  }

  ${variantStyles}
  box-shadow: ${(p) => p.disableShadow && "none"};
`
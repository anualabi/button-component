import styled, { css } from "styled-components";
import { ButtonProps } from './';
import { DEFAULT_COLOR, DEFAULT_DARK_COLOR, DARK_TEXT, PRIMARY_TEXT, LIGHT_BLUE } from "../utils/styles"

const variantStyles = (p: ButtonProps) => {
  let color = PRIMARY_TEXT;
  let backgroundColor = "transparent";
  let bgHoverColor = LIGHT_BLUE;
  let border = `2px solid ${PRIMARY_TEXT}`;
  let boxShadow = "0px 2px 3px rgba(51, 51, 51, 0.2)";

  if (p.variant === 'default') {
    color = DARK_TEXT;
    backgroundColor = DEFAULT_COLOR;
    border = "none";
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
  width: 81px;
  height: 36px;

  ${variantStyles}
  box-shadow: ${(p) => p.disableShadow && "none"};
`
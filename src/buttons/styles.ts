import styled, { css } from "styled-components";
import { ButtonProps } from './';
import { DEFAULT_COLOR, DEFAULT_DARK_COLOR, DARK_TEXT, PRIMARY_TEXT, LIGHT_BLUE, GRAY_TEXT, PRIMARY_COLOR, PRIMARY_DARK_COLOR, SECONDARY_COLOR, SECONDARY_DARK_COLOR, DANGER_COLOR, DANGER_DARK_COLOR, WHITE_COLOR } from "../utils/styles"

const colorStyles = (p: ButtonProps) => {
  let backgroundColor = PRIMARY_COLOR;
  let bgHoverColor  = PRIMARY_DARK_COLOR;
  let color = WHITE_COLOR;
  let border = "none"
  let boxShadow = "0px 2px 3px rgba(51, 51, 51, 0.2)";

  if (p.color === 'default') {
    backgroundColor = DEFAULT_COLOR;
    bgHoverColor = DEFAULT_DARK_COLOR;
    color = DARK_TEXT;
  } else if (p.color === 'secondary') {
    backgroundColor = SECONDARY_COLOR;
    bgHoverColor = SECONDARY_DARK_COLOR
  } else if (p.color === 'danger') {
    backgroundColor = DANGER_COLOR;
    bgHoverColor = DANGER_DARK_COLOR
  };

  return css`
    background-color: ${backgroundColor};
    color: ${color};
    border: ${border};
    box-shadow: ${boxShadow};

    &:not(:disabled) {
      &:hover,
      &:focus {
        background-color: ${bgHoverColor};
      }
    }
  `
}

const colorVariants = {
  default: DEFAULT_COLOR,
  primary: PRIMARY_TEXT,
  secondary: SECONDARY_COLOR,
  danger: DANGER_COLOR
}

const variantStyles = (p: ButtonProps) => {
  let color = p.color ? colorVariants[p.color] : PRIMARY_TEXT;
  let backgroundColor = "transparent"
  let bgHoverColor = LIGHT_BLUE;
  let border = "none";
  let boxShadow = "none";

  if (p.variant === "outline") {
    border = `2px solid ${color}`;
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
  background-color: ${DEFAULT_COLOR};
  border-radius: 6px;
  border-width: 0px;
  color: ${DARK_TEXT};
  cursor: pointer;
  text-align: center;
  margin: 1rem;
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
  padding: ${(p) => {
    if(p.size === "lg") {
      return ".5rem 1rem"
    } else if (p.size === "sm") {
      return ".3rem .5rem"
    }
    return ".4rem .75rem"
  }};

  .start-icon {
    margin-right: .3rem;
  };

  .end-icon {
    margin-left: .3rem;
  };

  &:hover {
    background-color: ${p => p.variant === "text" ? "transparent" : DEFAULT_DARK_COLOR};
  };

  &:disabled {
    background-color: ${p => p.variant === "text" ? "transparent" : DEFAULT_COLOR};
    border: none;
    box-shadow: none;
    color: ${GRAY_TEXT};
    cursor: inherit;
    
    &:hover {
      background-color: ${p => p.variant === "text" ? "transparent" : DEFAULT_COLOR};
    };
  };

  ${p => p.color !== undefined && colorStyles};
  ${p => p.variant !== undefined && variantStyles};
  box-shadow: ${(p) => p.disableShadow && "none"};
`
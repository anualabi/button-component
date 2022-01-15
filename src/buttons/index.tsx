import React from 'react'
import PropTypes from 'prop-types';
import { StyledButton } from './styles';

export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  variant?: 'default' | 'outline' | 'text';
  disableShadow?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({children, variant, disableShadow, ...props}, ref) => {
  return (
    <StyledButton 
      ref={ref} 
      type='button' 
      variant={variant} 
      disableShadow={disableShadow}
      {...props}
    >
      {children}
    </StyledButton>
  )
})

Button.propTypes = {
  variant: PropTypes.oneOf(['default', 'outline', 'text']),
  disableShadow: PropTypes.bool,
}

Button.defaultProps = {
  variant: 'default',
  disableShadow: false
}
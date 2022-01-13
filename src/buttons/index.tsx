import React from 'react'
import PropTypes from 'prop-types';
import { StyledButton } from './styles';

export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  variant?: 'default' | 'outline' | 'text';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({children, variant, ...props}, ref) => {
  return (
    <StyledButton 
      ref={ref} 
      type='button' 
      variant={variant} 
      {...props}
    >
      {children}
    </StyledButton>
  )
})

Button.propTypes = {
  variant: PropTypes.oneOf(['default', 'outline', 'text'])
}

Button.defaultProps = {
  variant: 'default'
}
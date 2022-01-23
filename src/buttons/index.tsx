import React from 'react'
import PropTypes from 'prop-types';
import { StyledButton } from './styles';

export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  variant?: 'default' | 'outline' | 'text';
  disableShadow?: boolean;
  startIcon?: string;
  endIcon?: string;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({children, variant, disableShadow, startIcon, endIcon, ...props}, ref) => {
  return (
    <StyledButton 
      ref={ref} 
      type='button' 
      variant={variant} 
      disableShadow={disableShadow}
      {...props}
    >
      {startIcon && <span className='material-icons start-icon'>{startIcon}</span>}
      {children}
      {endIcon && <span className='material-icons end-icon'>{endIcon}</span>}
    </StyledButton>
  )
})

Button.propTypes = {
  variant: PropTypes.oneOf(['default', 'outline', 'text']),
  disableShadow: PropTypes.bool,
  startIcon: PropTypes.string,
  endIcon: PropTypes.string

}

Button.defaultProps = {
  variant: 'default',
  disableShadow: false,
  startIcon: '',
  endIcon: '',
}
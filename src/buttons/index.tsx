import React from 'react'
import PropTypes from 'prop-types';
import { StyledButton } from './styles';

export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  variant?: undefined | 'text' | 'outline';
  disableShadow?: boolean;
  startIcon?: string;
  endIcon?: string;
  size?: 'sm' | 'md' | 'lg';
  color?: undefined | 'default' | 'primary' | 'secondary' | 'danger';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({children, variant, disableShadow, startIcon, endIcon, size, color, ...props}, ref) => {
  return (
    <StyledButton 
      ref={ref} 
      type='button' 
      variant={variant} 
      disableShadow={disableShadow}
      size={size}
      color={color}
      {...props}
    >
      {startIcon && <span className='material-icons start-icon'>{startIcon}</span>}
      {children}
      {endIcon && <span className='material-icons end-icon'>{endIcon}</span>}
    </StyledButton>
  )
})

Button.propTypes = {
  variant: PropTypes.oneOf(['outline', 'text']),
  disableShadow: PropTypes.bool,
  startIcon: PropTypes.string,
  endIcon: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  color: PropTypes.oneOf(['default', 'primary', 'secondary', 'danger']),
}

Button.defaultProps = {
  variant: undefined,
  disableShadow: false,
  startIcon: '',
  endIcon: '',
  size: 'md',
  color: undefined
}
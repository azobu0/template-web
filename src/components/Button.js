import React from 'react'
import PropTypes from 'prop-types'
import { variant } from '@xstyled/system'
import styled, { css } from '@xstyled/emotion'

const ButtonStyled = styled.button`
  cursor: pointer;
  border: none;
  border-radius: 100;
  color: #fff;
  font-weight: bold;
  padding: 10 20;
  background-color: none;
  transition: all 0.2s ease-in-out;
  ${variant({
    default: 'primary',
    variants: {
      primary: css`
        background-color: primary;
        &:hover {
          background-color: primaryAlt;
        }
      `,
      secondary: css`
        background-color: secondary;
        &:hover {
          background-color: secondaryAlt;
        }
      `,
      tertiary: css`
        background-color: transparent;
        color: primary;
        border: 2;
        border-color: primary;
        &:hover {
          color: primaryAlt;
          border-color: primaryAlt;
        }
      `
    }
  })}
`

const Button = ({ variant = 'primary', onClick, children }) => {
  return (
    <ButtonStyled variant={variant} onClick={onClick}>
      {children}
    </ButtonStyled>
  )
}

Button.propTypes = {
  variant: PropTypes.any,
  onClick: PropTypes.func,
  children: PropTypes.any.isRequired
}

export default Button

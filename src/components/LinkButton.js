import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { variant } from '@xstyled/system'
import styled, { css } from '@xstyled/emotion'

const LinkButtonStyled = styled(Link)`
  cursor: pointer;
  border: none;
  border-radius: 100;
  color: #fff;
  font-weight: bold;
  padding: 10 20;
  text-decoration: none;
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

const LinkButton = ({ variant, to, children }) => {
  return (
    <LinkButtonStyled to={to} variant={variant}>
      {children}
    </LinkButtonStyled>
  )
}

LinkButton.propTypes = {
  variant: PropTypes.string,
  to: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired
}

export default LinkButton

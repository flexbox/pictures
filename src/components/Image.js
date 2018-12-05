import styled, { css } from 'styled-components'

export default styled.img`
  background-color: #fdf6e3;

  ${props =>
    props.rounded &&
    css`
      border-radius: 6px;
    `} ${props =>
    props.circle &&
    css`
      border-radius: 50%;
    `};
`

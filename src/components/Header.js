import React from 'react'
import styled from 'styled-components'

const Header = () => {
  return (
    <HeaderContainer>
      <span role="img" aria-label="Wait">
        📸{' '}
      </span>
      Photos{' '}
    </HeaderContainer>
  )
}

export default Header

const HeaderContainer = styled.div`
  background-color: hsla(240, 16%, 93%, 0.2);
  font-weight: bold;
  padding: 1rem 2rem;
`

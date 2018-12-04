import React from 'react'
import styled from 'styled-components'

const Loader = () => {
  return (
    <Container>
      <span role="img" aria-label="Wait">
        ⏳
      </span>{' '}
      Loading…
    </Container>
  )
}

export default Loader

const Container = styled.div`
  height: 100vh;
  witdh: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

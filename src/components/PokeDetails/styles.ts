import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding-top: 16px;

  @media (max-width: 600px) {
    overflow: hidden;
    padding: 20px;
  }
`

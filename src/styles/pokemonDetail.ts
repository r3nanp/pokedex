import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > h1 {
    font-weight: 700;
    text-transform: uppercase;
  }

  > img {
    width: 13rem;
  }
`

export const DetailsCard = styled.div`
  background: var(--gray-600);
`

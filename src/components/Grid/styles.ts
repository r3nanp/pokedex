import styled from 'styled-components'

export const Container = styled.section`
  margin: 5rem 0;
  display: grid;
  grid-gap: 3rem 2rem;
  grid-template-columns: repeat(auto-fill, 250px);
  justify-content: center;

  > div a {
    height: 100%;
    text-decoration: none;
  }
`

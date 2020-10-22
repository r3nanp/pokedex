import styled from 'styled-components'

export const Container = styled.main``

export const PokemonCard = styled.div`
  padding: 3rem;

  height: 350px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > header {
    height: 100%;
    > h1 {
      font-weight: 700;
    }
  }

  > footer {
    display: flex;
    flex-direction: column;

    > p {
      font: 600 1rem Roboto, sans-serif;
    }

    > div {
      display: flex;
      flex-direction: column;
      align-items: center;

      > button {
        width: 100%;
        height: 50px;
        border-radius: 5px;
        background: var(--primary);
        color: var(--text);
        cursor: pointer;
        text-transform: uppercase;
        transition: .4s;

        &:hover {
          background: var(--primary-hover);
        }
      }
    }
  }
`

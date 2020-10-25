import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  > p {
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  > span {
    display: flex;
    justify-content: center;
    align-items: center;

    background: var(--badge);
    color: var(--text);
    border-radius: 10px;

    width: 5rem;
    margin: 0.5rem;
    padding: 0.1rem 0.3rem;
  }
`

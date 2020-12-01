import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;

  > span {
    font-weight: 500;
    text-align: center;

    background: var(--badge);
    color: var(--text);
    border-radius: 10px;

    width: 5rem;
    height: 1.5rem;
    margin: 0.5rem;
    padding: 0.1rem 0.3rem;
  }
`

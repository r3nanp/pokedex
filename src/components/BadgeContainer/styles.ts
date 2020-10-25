import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  > span {
    display: flex;
    justify-content: center;
    align-items: center;

    color: var(--text);
    background: var(--primary);
    border-radius: 5px;

    width: 5rem;
    margin-right: 0.5rem;
    padding: 0.1rem 0.3rem;
  }
`

import styled from 'styled-components'
import { AiOutlineInfoCircle } from 'react-icons/ai'

export const Container = styled.main``

export const Header = styled.header`
  width: 100%;
  height: 50px;
  padding: 10px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  position: sticky;
  top: 0;
  z-index: 100;

  background: var(--primary);
  border: 1px solid var(--gray-700);

  > div {
    > h3 {
      text-align: center;
      font-size: 20px;
      font-weight: 700;
    }
  }
`

export const Wrapper = styled.section`
  margin: 5rem 0;
  display: grid;
  grid-gap: 3rem 2rem;
  grid-template-columns: repeat(auto-fill, 250px);
  justify-content: center;
`

export const InfoIcon = styled(AiOutlineInfoCircle)`
  width: 30px;
  height: 30px;
  fill: white;
  flex-shrink: 0;
  cursor: pointer;

  &:hover {
    fill: var(--text);
  }
`

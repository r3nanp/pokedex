import styled from 'styled-components'
import { AiOutlineArrowLeft } from 'react-icons/ai'

export const Container = styled.header`
  width: 100%;
  height: 50px;
  padding: 10px;

  display: flex;
  align-items: center;

  position: fixed;
  top: 0;
  background: var(--primary);
  border-bottom: 1px solid var(--gray-600);

  > div {
    margin: 0 auto;

    > h1 {
      font-weight: 700;
    }
  }
`

export const ArrowIcon = styled(AiOutlineArrowLeft)`
  width: 30px;
  height: 30px;
  fill: white;
  flex-shrink: 0;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    fill: var(--text);
  }
`

import styled from 'styled-components'
import { AiOutlineInfoCircle } from 'react-icons/ai'

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

export const Wrapper = styled.main`
  > form {
    margin-top: 30px;
    display: flex;
    align-items: center;
    justify-content: center;

    > label input {
      margin-right: 7px;
      padding: 6px 10px;
      border-radius: 5px;
      transition: 0.2s;

      &:focus {
        border: 2px solid var(--primary);
      }
    }

    > button {
      width: 60px;
      height: 30px;
      cursor: pointer;

      font-size: 15px;
      border-radius: 5px;

      background: var(--primary);
      color: white;
      transition: 0.4s;

      &:hover {
        background: var(--primary-hover);
      }
    }
  }
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

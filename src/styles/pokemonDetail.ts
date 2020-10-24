import styled from 'styled-components'

import { AiOutlineArrowLeft } from 'react-icons/ai'

export const Container = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > header {
    width: 100%;
    height: 50px;
    padding: 10px;

    display: flex;
    align-items: center;

    position: fixed;
    top: 0;
    background: var(--gray-600);
    border-bottom: 1px solid green;

    > div {
      margin: 0 auto;

      > h1 {
        font-weight: 700;
      }
    }
  }

  @media (max-width: 600px) {
    overflow: hidden;
    padding: 20px;
  }
`

export const DetailsCard = styled.div`
  margin-top: 30px;
  width: 50%;
  max-width: 400px;

  display: flex;
  flex-direction: column;

  background: var(--gray-600);
  border-radius: 30px;

  > h3 {
    padding: 20px;
    font-weight: 700;
    text-align: center;
    text-transform: uppercase;
  }

  .image-container {
    display: flex;
    align-items: center;
    justify-content: center;

    > img {
      height: 250px;
      object-fit: cover;
    }
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  > strong {
    color: var(--primary);
    text-transform: uppercase;
    padding-bottom: 10px;
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

import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;

  background: var(--gray-600);
  box-shadow: -1rem 0 3rem #000;
  border-radius: 14px;

  padding: 3rem;
  margin: 10px;

  width: 250px;
  height: 450px;

  > header {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;

    > h1 {
      font-weight: 700;
      text-transform: uppercase;
      text-align: center;
    }
  }

  > footer {
    width: 100%;
    display: flex;
    flex-direction: column;

    > p {
      text-align: center;
      font: 600 1rem Roboto, sans-serif;
    }

    > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      border-bottom: 20px;

      > a button {
        width: 150px;
        height: 50px;
        border-radius: 5px;
        background: var(--primary);
        color: var(--text);
        cursor: pointer;
        text-transform: uppercase;
        transition: 0.4s;

        &:hover {
          background: var(--primary-hover);
        }
      }
    }
  }

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`

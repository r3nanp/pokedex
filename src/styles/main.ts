import styled from 'styled-components'
import { motion } from 'framer-motion'
import { AiOutlineInfoCircle } from 'react-icons/ai'

export const Container = styled.main`
  > header {
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
  }
`

export const Wrapper = styled.section`
  margin: 5rem 0;
  display: grid;
  grid-template-areas: 'pokemoncard';
  grid-gap: 3rem 2rem;
  grid-template-columns: repeat(auto-fill, 250px);
  justify-content: center;

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
  }
`

export const PokemonCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  height: 100%;

  background: var(--gray-600);
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

      > button {
        width: 100%;
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
    width: 80vw;
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

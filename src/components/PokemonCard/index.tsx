/* eslint-disable react/react-in-jsx-scope */
import { memo } from 'react'
import { Container } from './styles'

const PokemonCard: React.FC = ({ children }) => {
  return <Container whileHover={{ scale: 1.1 }}>{children}</Container>
}

export default memo(PokemonCard)

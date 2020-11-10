/* eslint-disable react/react-in-jsx-scope */
import { Container } from './styles'

const DetailsCard: React.FC = ({ children }) => {
  return (
    <Container>
      {children}
    </Container>
  )
}

export default DetailsCard

/* eslint-disable react/react-in-jsx-scope */
import { Container } from './styles'

const InfoContainer: React.FC = ({ children }) => {
  return (
    <Container>
      {children}
    </Container>
  )
}

export default InfoContainer

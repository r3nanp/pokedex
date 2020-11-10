/* eslint-disable react/react-in-jsx-scope */
import Link from 'next/link'
import { Container, Header, Wrapper, InfoIcon } from './styles'
import CircleProgress from '../CircleProgress'

const MainContent: React.FC = ({ children }) => {
  return (
    <Container>
      <Header>
        <CircleProgress />
        <div>
          <h3>Pokédex</h3>
        </div>
        <Link href="/about">
          <a>
            <InfoIcon />
          </a>
        </Link>
      </Header>
      <Wrapper>{children}</Wrapper>
    </Container>
  )
}

export default MainContent

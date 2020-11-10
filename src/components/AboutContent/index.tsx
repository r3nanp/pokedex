/* eslint-disable react/react-in-jsx-scope */
import Link from 'next/link'
import Header from '../Header'
import { Container, Main, Footer, GithubLogo, LinkedinLogo } from './styles'

const AboutContent: React.FC = () => {
  return (
    <Container>
      <Header text="About the project" />

      <Main>
        <div>
          <p>Where to find me:</p>
          <Link href="https://github.com/r3nanp">
            <a target="blank" rel="noopener noreferrer">
              <GithubLogo />
            </a>
          </Link>
          <Link href="https://www.linkedin.com/in/r3nanp">
            <a target="blank" rel="noopener noreferrer">
              <LinkedinLogo />
            </a>
          </Link>
        </div>
      </Main>

      <Footer>
        <h1>Made by Renan Pereira with 💖</h1>
      </Footer>
    </Container>
  )
}

export default AboutContent

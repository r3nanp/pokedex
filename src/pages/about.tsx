/* eslint-disable react/react-in-jsx-scope */
import Head from 'next/head'
import Link from 'next/link'
import {
  Wrapper,
  Content,
  Footer,
  GithubLogo,
  LinkedinLogo,
} from '../styles/about'

export default function About(): JSX.Element {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>

      <Wrapper>
        <Content>
          <div>
            <p>Where to find me:</p>
            <Link href="https://github.com/r3nanp">
              <a target="blank">
                <GithubLogo />
              </a>
            </Link>
            <Link href="https://www.linkedin.com/in/r3nanp">
              <a target="blank">
                <LinkedinLogo />
              </a>
            </Link>
          </div>
        </Content>

        <Footer>
          <h1>Made by Renan Pereira with 💖</h1>
        </Footer>
      </Wrapper>
    </>
  )
}

/* eslint-disable react/react-in-jsx-scope */
import Head from 'next/head'
import Link from 'next/link'
import { Wrapper, Content, Header, Footer } from '../styles/about'

export default function About(): JSX.Element {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>

      <main>
        <Wrapper>
          <Header>
            <h1>Made by Renan Pereira with 💖</h1>
          </Header>

          <Content />

          <Footer>
            <div>
              <Link href="https://github.com/r3nanp">
                <a>Github</a>
              </Link>
            </div>
          </Footer>
        </Wrapper>
      </main>
    </>
  )
}

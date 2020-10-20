/* eslint-disable react/react-in-jsx-scope */
import Head from 'next/head'

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Pokédex</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>Hello World!</main>
    </div>
  )
}

export default Home

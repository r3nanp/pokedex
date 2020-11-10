/* eslint-disable react/react-in-jsx-scope */
import Head from 'next/head'
import AboutContent from '../components/AboutContent'

export default function About(): JSX.Element {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>

      <AboutContent />
    </>
  )
}

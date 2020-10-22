/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable camelcase */
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'

export default function Pokemon({ info }): JSX.Element {
  return (
    <div>
      <Head>
        <title>Pokemon Detail</title>
      </Head>

      <main>
        <h1>{info.species.name}</h1>

        <img src={info.sprites.front_default} alt={info.species.name} />
      </main>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const request = await fetch('https://pokeapi.co/api/v2/pokedex/2/')

  const data = await request.json()
    .then(request => {
      return request.pokemon_entries
    })

  const paths = data.map(pokemon => {
    return { params: { entry_number: pokemon.entry_number } }
  })

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { entry_number } = params

  const request = await fetch(`https://pokeapi.co/api/v2/pokemon/${entry_number}/`)
  const data = await request.json()

  return {
    props: {
      info: data,
    },
    revalidate: 10,
  }
}

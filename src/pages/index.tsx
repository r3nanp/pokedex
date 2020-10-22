/* eslint-disable comma-dangle */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable camelcase */
import Head from 'next/head'
import Link from 'next/link'
import { GetStaticProps } from 'next'

import { List } from '../styles/main'

export default function Home({ pokemonData }): JSX.Element {
  return (
    <div>
      <Head>
        <title>Pokédex</title>
      </Head>

      <main>
        <List>
          <Link href="about">About</Link>
          {pokemonData.map(pokemon => {
            return (
              <li key={pokemon.entry_number}>
                <Link href={`/pokemon/${pokemon.entry_number}`}>
                  <a>{pokemon.pokemon_species.name}</a>
                </Link>
              </li>
            )
          })}
        </List>
      </main>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const pokemons = await fetch('https://pokeapi.co/api/v2/pokedex/2/')
  const data = await pokemons.json().then(res => {
    return res.pokemon_entries
  })
  return {
    props: {
      pokemonData: data,
    },
    revalidate: 10,
  }
}

/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable camelcase */
import Head from 'next/head'
import { Link } from 'react-router-dom'

import { List } from '../styles/main'

export async function getStaticProps() {
  const pokemons = await fetch('https://pokeapi.co/api/v2/pokedex/2/')
    .then(response => {
      if (response.status === 200) {
        return response.json()
      }
    })
    .then(res => {
      return res.pokemon_entries
    })
  return {
    props: {
      pokemons
    }
  }
}

interface PokemonsProps {
  pokemons: Array<{
    entry_number: number
    pokemon_species: {
      name: string
      url: string
    }
  }>
}

const Home: React.FC<PokemonsProps> = ({ pokemons }) => {
  return (
    <div>
      <Head>
        <title>Pokédex</title>
      </Head>

      <main>
        <List>
          <Link to="/link.tsx">
            Home
          </Link>
          {pokemons.map(pokemon => {
            return (
              <li key={pokemon.entry_number}>{pokemon.pokemon_species.name}</li>
            )
          })}
        </List>
      </main>
    </div>
  )
}

export default Home

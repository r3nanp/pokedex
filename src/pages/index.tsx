/* eslint-disable camelcase */
/* eslint-disable react/react-in-jsx-scope */
import Head from 'next/head'

import { List } from '../styles/main'

export async function getStaticProps(context) {
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
  entry_number: number
  pokemon_species: {
    name: string
    url: string
  }
  pokemons: []
}

const Home: React.FC<PokemonsProps> = ({ entry_number, pokemon_species, pokemons }) => {
  return (
    <div>
      <Head>
        <title>Pokédex</title>
      </Head>

      <main>
        <List>
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

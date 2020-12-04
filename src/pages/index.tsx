/* eslint-disable camelcase */
/* eslint-disable react/react-in-jsx-scope */
import { FormEvent, useState, useCallback } from 'react'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'

import MainContent from '../components/MainContent'
import PokemonCard from '../components/PokemonCard'
import Grid from '../components/Grid'

interface IPokemonDataProps {
  entry_number: string
  pokemon_species: {
    name: string
  }
}

interface IPokemonData {
  pokemonData: IPokemonDataProps[]
}

const Home: React.FC<IPokemonData> = ({ pokemonData }) => {
  const [query, setQuery] = useState('')

  const handleSubmit = useCallback((event: FormEvent) => {
    event.preventDefault()

    console.log(query)
  }, [])

  return (
    <>
      <Head>
        <title>Pokédex</title>
      </Head>

      <MainContent>
        <form onSubmit={handleSubmit}>
          <label htmlFor="search-label">
            <input
              type="search"
              id="search-label"
              value={query}
              placeholder="Search a pokémon"
              onChange={e => setQuery(e.target.value)}
            />
          </label>

          <button type="submit">Search</button>
        </form>

        <Grid>
          {pokemonData.map(pokemon => (
            <PokemonCard key={pokemon.entry_number}>
              <header>
                <h1>{pokemon.pokemon_species.name}</h1>
              </header>

              <footer>
                <div>
                  <Link href={`/pokemon/${pokemon.entry_number}`}>
                    <a>
                      <button>{pokemon.pokemon_species.name}</button>
                    </a>
                  </Link>
                </div>
              </footer>
            </PokemonCard>
          ))}
        </Grid>
      </MainContent>
    </>
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
  }
}

export default Home

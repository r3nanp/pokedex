/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable camelcase */
import Head from 'next/head'
import Link from 'next/link'
import { GetStaticProps } from 'next'
import { FormEvent, useState } from 'react'

import MainContent from '../components/MainContent'
import PokemonCard from '../components/PokemonCard'
import Grid from '../components/Grid'

export default function Home({ pokemonData }): JSX.Element {
  const [query, setQuery] = useState('')

  function handleSubmit(event: FormEvent) {
    event.preventDefault()
  }

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
              onChange={event => setQuery(event.target.value)}
            />
          </label>

          <button type="submit">Search</button>
        </form>
        <Grid>
          {pokemonData.map(pokemon => {
            return (
              <PokemonCard key={pokemon.entry_number}>
                <header>
                  <h1>{pokemon.pokemon_species.name}</h1>
                </header>

                <footer>
                  <p>Learn more about: </p>
                  <div>
                    <Link href={`/pokemon/${pokemon.entry_number}`}>
                      <a>
                        <button>{pokemon.pokemon_species.name}</button>
                      </a>
                    </Link>
                  </div>
                </footer>
              </PokemonCard>
            )
          })}
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
    revalidate: 10,
  }
}

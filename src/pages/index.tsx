/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable camelcase */
import Head from 'next/head'
import Link from 'next/link'
import { GetStaticProps } from 'next'

import { Container, PokemonCard } from '../styles/main'

export default function Home({ pokemonData }): JSX.Element {
  return (
    <div>
      <Head>
        <title>Pokédex</title>
      </Head>

      <Container>
        {pokemonData.map(pokemon => {
          return (
            <PokemonCard key={pokemon.entry_number}>
              <header>
                <h1>{pokemon.pokemon_species.name}</h1>
              </header>

              <footer>
                <p>Saiba mais sobre:</p>
                <div>
                  <Link href={`/pokemon/${pokemon.entry_number}`}>
                    <button>
                      <a>{pokemon.pokemon_species.name}</a>
                    </button>
                  </Link>
                </div>
              </footer>
            </PokemonCard>
          )
        })}
        <Link href="about">Sobre o projeto</Link>
      </Container>
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

/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable camelcase */
import Head from 'next/head'
import Link from 'next/link'
import { GetStaticProps } from 'next'

import { Container, PokemonCard, InfoIcon, Wrapper } from '../styles/main'
import CircleProgress from '../components/CircleProgress'

export default function Home({ pokemonData }): JSX.Element {
  return (
    <div>
      <Head>
        <title>Pokédex</title>
      </Head>

      <Container>
        <header>
          <CircleProgress />
          <div>
            <h3>Pokédex</h3>
          </div>
          <Link href="about">
            <a>
              <InfoIcon />
            </a>
          </Link>
        </header>

        <Wrapper>
          {pokemonData.map(pokemon => {
            return (
              <PokemonCard
                whileHover={{ scale: 1.1 }}
                key={pokemon.entry_number}
              >
                <header>
                  <h1>{pokemon.pokemon_species.name}</h1>
                </header>

                <footer>
                  <p>Learn more about: </p>
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
        </Wrapper>
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

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable camelcase */
import Head from 'next/head'
import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'

import {
  Container,
  DetailsCard,
  InfoContainer,
  ArrowIcon,
} from '../../styles/pokemonDetail'
import Link from 'next/link'

export default function Pokemon({ info }): JSX.Element {
  const { isFallback } = useRouter()

  if (isFallback) {
    return <p>Loading...</p>
  }

  return (
    <div>
      <Head>
        <title>Pokémon detail</title>
      </Head>

      <Container>
        <header>
          <Link href="/">
            <a>
              <ArrowIcon />
            </a>
          </Link>
          <div>
            <h3>PokéInfo</h3>
          </div>
        </header>

        <DetailsCard>
          <h3>{info.species.name}</h3>
          <div className="image-container">
            <img src={info.sprites.front_default} alt={info.species.name} />
          </div>

          <h3>Pokémon Attributes</h3>
          {info.stats.map(stat => {
            return (
              <InfoContainer key={stat.stat.name}>
                <strong>
                  {stat.stat.name}: {stat.base_stat}
                </strong>
              </InfoContainer>
            )
          })}
        </DetailsCard>
      </Container>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const request = await fetch('https://pokeapi.co/api/v2/pokedex/2')

  const pokemons = await request.json().then(req => {
    return req.pokemon_entries
  })

  const paths = pokemons.map(pokemon => {
    return {
      params: {
        id: pokemon.entry_number.toString(),
      },
    }
  })

  return {
    paths,
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params

  const request = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
  const data = await request.json()

  return {
    props: {
      info: data,
    },
    revalidate: 10,
  }
}

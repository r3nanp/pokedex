/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable camelcase */
import Head from 'next/head'
import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'

import BadgeContainer from '../../components/BadgeContainer'
import InfoContainer from '../../components/InfoContainer'
import DetailsCard from '../../components/DetailsCard'
import Header from '../../components/Header'
import PokeDetails from '../../components/PokeDetails'

export default function Pokemon ({ info }): JSX.Element {
  const { isFallback } = useRouter()

  if (isFallback) {
    return <p>Loading...</p>
  }

  return (
    <>
      <Head>
        <title>Pokémon detail</title>
      </Head>

      <PokeDetails>
        <Header text="PokéInfo" />

        <DetailsCard>
          <h3>{info.species.name}</h3>
          <div className="image-container">
            <img src={info.sprites.front_default} alt={info.species.name} />
          </div>

          <h3>Pokémon Attributes</h3>
          <BadgeContainer>
            {info.types.map(type => {
              return <span key={type.type.name}>{type.type.name}</span>
            })}
          </BadgeContainer>

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
      </PokeDetails>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const request = await fetch('https://pokeapi.co/api/v2/pokedex/2')

  const pokemons = await request.json()
    .then(req => {
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

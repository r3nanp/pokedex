import Head from 'next/head'
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'

import BadgeContainer from '../../components/BadgeContainer'
import InfoContainer from '../../components/InfoContainer'
import DetailsCard from '../../components/DetailsCard'
import Header from '../../components/Header'
import PokeDetails from '../../components/PokeDetails'

export default function Pokemon({
  pokemon,
}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
  return (
    <>
      <Head>
        <title>Pokémon detail</title>
      </Head>

      <PokeDetails>
        <Header text="PokéInfo" />

        <DetailsCard>
          <h3>{pokemon.species.name}</h3>
          <div className="image-container">
            <img
              src={pokemon.sprites.front_default}
              alt={pokemon.species.name}
            />
          </div>

          <h3>Pokémon Attributes</h3>
          <BadgeContainer>
            {pokemon.types.map(type => {
              return <span key={type.type.name}>{type.type.name}</span>
            })}
          </BadgeContainer>

          {pokemon.stats.map(stat => {
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
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params

  const request = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
  const data = await request.json()

  return {
    props: {
      pokemon: data,
    },
    revalidate: 60 * 60 * 60, // 2.5 days
  }
}

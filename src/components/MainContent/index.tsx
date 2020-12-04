/* eslint-disable react/react-in-jsx-scope */
import Link from 'next/link'
import CircleProgress from '../CircleProgress'

import { Header, Wrapper, InfoIcon } from './styles'

const MainContent: React.FC = ({ children }) => {
  return (
    <>
      <Header>
        <CircleProgress />
        <div>
          <h3>Pokédex</h3>
        </div>
        <Link href="/about">
          <a>
            <InfoIcon />
          </a>
        </Link>
      </Header>
      <Wrapper>{children}</Wrapper>
    </>
  )
}

export default MainContent

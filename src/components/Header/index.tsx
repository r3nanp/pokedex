import { FC } from 'react'
import Link from 'next/link'
import { Container, ArrowIcon } from './styles'

interface TextProps {
  text: string
}

const Header: FC<TextProps> = ({ text }) => {
  return (
    <Container>
      <Link href="/">
        <a>
          <ArrowIcon />
        </a>
      </Link>
      <div>
        <h3>{text}</h3>
      </div>
    </Container>
  )
}

export default Header

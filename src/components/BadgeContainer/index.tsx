import { FC } from 'react'
import { Container } from './styles'

const BadgeContainer: FC = ({ children }): JSX.Element => {
  return <Container>{children}</Container>
}

export default BadgeContainer

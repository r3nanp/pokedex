/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable react/react-in-jsx-scope */
import { Container } from './styles'

export default function BadgeContainer({ children }): JSX.Element {
  return (
    <Container>
      {children}
    </Container>
  )
}

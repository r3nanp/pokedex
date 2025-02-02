/* eslint-disable react/react-in-jsx-scope */
import { motion } from 'framer-motion'
import { Container } from './styles'

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
}

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
}

const PokemonCard: React.FC = ({ children }) => {
  return (
    <Container
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 1.2 }}
      initial="hidden"
      animate="visible"
      variants={container}
    >
      <motion.div variants={item}>{children}</motion.div>
    </Container>
  )
}

export default PokemonCard

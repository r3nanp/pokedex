import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: var(--background);
    color: var(--text);
    font: 400 1rem 'Roboto', sans-serif;
  }

  input, button {
    border: none;
  }

  button {
    cursor: pointer;
  }

  h1, h2, strong {
    color: var(--text);
    font: 700 1.5rem 'Poppins', system-ui, sans-serif;
  }

  :root {
    ${props => {
      const theme = props.theme

      let append = ''

      Object.entries(theme).forEach(([prop, value]) => {
        append += `--${prop}: ${value};`
      })
      return append
    }}
  }
`

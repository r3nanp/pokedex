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
    font: 400 16px Roboto, sans-serif;
  }

  input, button {
    outline: none;
    border: none;
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

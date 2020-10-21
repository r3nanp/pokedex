import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: var(--bg);
    color: var(--text);
    font: 400 16px Roboto, sans-serif;
  }

  ul {
    list-style: none;
  }

  :root {
    --bg:  ${props => props.theme.colors.background};
    --text: ${props => props.theme.colors.text};
    --primary: ${props => props.theme.colors.primary};
    --primary-hover: ${props => props.theme.colors['primary-hover']};
  }
`

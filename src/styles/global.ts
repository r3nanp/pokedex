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

  input, button {
    outline: none;
    border: none;
  }

  :root {
    --bg:  ${props => props.theme.colors.background};
    --text: ${props => props.theme.colors.text};
    --primary: ${props => props.theme.colors.primary};
    --badge: ${props => props.theme.colors.badge};
    --primary-hover: ${props => props.theme.colors['primary-hover']};
    --gray-600: ${props => props.theme.colors['gray-600']};
    --gray-700: ${props => props.theme.colors['gray-700']};
    --gray-800: ${props => props.theme.colors['gray-800']};
  }
`

import styled, { css } from 'styled-components'
import { AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  overflow: hidden;
`

export const Content = styled.div`
  height: 100vh;
`

export const Header = styled.header`
  display: flex;
  padding-top: 30px;
  > h1 {
    color: var(--primary);
    text-align: center;
    font: 700 16px Roboto, sans-serif;
    text-align: center;
  }
`

export const Footer = styled.footer`
  width: 100vw;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;

    padding-bottom: 40px;
    > a {
      color: var(--primary);
      text-decoration: none;

      &:hover {
        color: var(--primary-hover);
        text-decoration: underline;
      }
    }
  }
`

const iconCss = css`
  width: 40px;
  height: 40px;
  fill: white;
  flex-shrink: 0;
  transition: 0.4s;

  &:hover {
    fill: var(--text);
  }
`

export const GithubLogo = styled(AiOutlineGithub)`
  ${iconCss}
`

export const LinkedinLogo = styled(AiOutlineLinkedin)`
  ${iconCss}
`

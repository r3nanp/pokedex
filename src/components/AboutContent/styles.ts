import styled, { css } from 'styled-components'
import { AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai'

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  overflow: hidden;
`

export const Main = styled.div`
  height: 50vh;

  display: flex;
  flex-direction: column;

  > div {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    padding-bottom: 40px;

    > p {
      text-align: center;
      padding: 0.5rem;
      color: var(--primary);
    }

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

export const Footer = styled.footer`
  display: flex;
  margin-bottom: 40px;
  > h1 {
    color: var(--primary);
    text-align: center;
    font: 700 16px Roboto, sans-serif;
    text-align: center;
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

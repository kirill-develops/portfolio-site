import * as React from "react"
import styled from 'styled-components'
import Hero from '../components/Hero'
import GlobalStyle from '../styles/globalStyles.js'

const Main = styled.main`
  color: #232129;
  padding: 96px;
  fontFamily: -apple-system, Roboto, sans-serif, serif;
  `;


const IndexPage = () => {
  return (
    <>
    <GlobalStyle/>
    <Main>
      <Hero />
    </Main>
    </>
  )
}

export default IndexPage

export const Head = () => <title>Kirill Tchentsov | Web Developer</title>

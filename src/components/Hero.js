import React from 'react'
import styled from 'styled-components'
import {
  Title, 
  TitleAccent, 
  TitleLink
} from '../styles/globalStyles.js'

const Main = styled.section`
  height: calc(100vh - 96px);
`;

const Hero = () => {
  return (
    <Main id="top">
      <Title >
        Kirill Tchentsov
        <br />
        <TitleAccent>Web Developer</TitleAccent>
      </Title>
      <TitleLink href="#about">Learn More</TitleLink>
    </Main>
  )
}

export default Hero
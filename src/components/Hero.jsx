import React from 'react';
import styled from 'styled-components';
import { Section, Title, TitleAccent, TitleLink } from '../styles/globalStyles';
import media from '../styles/mediaQueries';

const HeroSection = styled(Section)`
  height: 100vh;
  transform: translateY(15%);
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${media.deviceLandscape`
  transform: translateY(-10%);
  width: 75%;
  margin: auto;
  `};

  ${media.laptop`
  transform: translateY(-10%);
  width: 75%;
  margin: auto;
  `};

  ${media.desktop`
  transform: translateY(-10%);
  width: 75%;
  margin: auto;
  `};
`;

function Hero() {
  return (
    <HeroSection id="top">
      <Title Hero>
        Kirill Tchentsov
        <br />
        <TitleAccent color="#1c52a2">Web Developer</TitleAccent>
      </Title>
      <TitleLink href="#about">Learn More</TitleLink>
      <br />
      <TitleLink href="#projects">Projects</TitleLink>
      <br />
      <TitleLink href="#contact">Contact Me</TitleLink>
    </HeroSection>
  );
}

export default Hero;
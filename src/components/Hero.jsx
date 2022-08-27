import React from 'react';
import { Parallax } from 'react-scroll-parallax';
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
      <Parallax
        opacity={[10, -1]}
        easing="easeInOutQuad"
      >
        <Title Hero>
          Kirill Tchentsov
          <br />
          <TitleAccent color="#1c52a2">Web Developer</TitleAccent>
        </Title>
      </Parallax>
      <Parallax
        opacity={[10, -1]}
        offset
        easing="easeInOutQuad"
      >
        <TitleLink href="#about">Learn More</TitleLink>
      </Parallax>
      <br />
      <Parallax
        opacity={[10, -1]}
        easing="easeInOutQuad"
      >
        <TitleLink href="#projects">Projects</TitleLink>
      </Parallax>
      <br />
      <Parallax
        opacity={[10, -1]}
        easing="easeInOutQuad"
      >
        <TitleLink href="#contact">Contact Me</TitleLink>
      </Parallax>
    </HeroSection>
  );
}

export default Hero;

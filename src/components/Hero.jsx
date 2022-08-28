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
  overflow-x: hidden;

  ${media.tabletPortrait`
    width:75%;
    margin: auto;
  `}

  ${media.tabletLandscape`
  transform: unset;
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
const parallaxProps = {
  opacity: [1, -1],
  translateX: [0, 350],
  translateY: [0, 0],
  easing: 'easeInOutQuad',
  shouldAlwaysCompleteAnimation: true,
};

function Hero() {
  return (
    <HeroSection id="top">
      <Parallax
        startScroll={0}
        endScroll={1250}
        {...parallaxProps}
      >
        <Title Hero>
          Kirill Tchentsov
          <br />
          <TitleAccent color="#1c52a2">Web Developer</TitleAccent>
        </Title>
      </Parallax>
      <Parallax
        startScroll={25}
        endScroll={1275}
        {...parallaxProps}
      >
        <TitleLink href="#about">Learn More</TitleLink>
      </Parallax>
      <br />
      <Parallax
        startScroll={50}
        endScroll={1300}
        {...parallaxProps}
      >
        <TitleLink href="#projects">Projects</TitleLink>
      </Parallax>
      <br />
      <Parallax
        startScroll={75}
        endScroll={1325}
        {...parallaxProps}
      >
        <TitleLink href="#contact">Contact Me</TitleLink>
      </Parallax>
    </HeroSection>
  );
}

export default Hero;

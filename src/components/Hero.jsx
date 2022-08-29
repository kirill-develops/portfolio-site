import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import styled from 'styled-components';
import { Section, Title, TitleAccent, TitleLink } from '../styles/globalStyles';
import media from '../styles/mediaQueries';

// Styled-Components specific to Hero Component
const HeroSection = styled(Section)`
  background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const HeroWrapper = styled.div`
  transform: translateY(15%);

  ${media.mobileLandscape`
  width: 75%;
  transform: unset;
    margin: auto;
  `}

  ${media.tabletLandscape`
  transform: unset;
  width: 75%;
  margin: auto;
  `};

  ${media.tabletPortrait`
    width:75%;
    margin: auto;
  `}

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

// props object for Parallax animation wrapper
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
      <HeroWrapper>
        <Parallax
          startScroll={0}
          endScroll={1250}
          {...parallaxProps}
        >
          <Title
            Hero
            as="h1"
          >
            Kirill Tchentsov
            <br />
            <TitleAccent color="#1c52a2">Software Dev</TitleAccent>
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
      </HeroWrapper>
    </HeroSection>
  );
}

export default Hero;

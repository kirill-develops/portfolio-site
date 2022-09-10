import { graphql, useStaticQuery } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import React, { useMemo, useCallback } from 'react';
import { Parallax } from 'react-scroll-parallax';
import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';
import { convertToBgImage } from 'gbimage-bridge';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import particlesJson from '../assets/hero-particlesjs-config.json';
import { Section, Title, TitleAccent, TitleLink } from '../styles/globalStyles';
import media from '../styles/mediaQueries';

// Styled-Components specific to Hero Component
const HeroSection = styled(Section)`
  background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;

  ${media.mobileLandscape`
    width: 65%;
  `}

  ${media.tabletLandscape`
    width: 35%;
    height: 100vh;
    max-width: 100%;
    overflow: hidden;
  `};

  ${media.tabletPortrait`
    width:45%;
    height: 100vh;
    max-width: 100%;
    overflow: hidden;
  `}

  ${media.laptop`
    width: 40%;
  `};

  ${media.desktop`
    width: 35%;
  `};
`;

// props object for Parallax animation wrapper
const parallaxProps = {
  opacity: [1, -1],
  translateX: [0, 350],
  translateY: [0, 0],
  easing: 'easeInOutQuad',
  shouldAlwaysCompleteAnimation: true,
  style: {
    zIndex: 1,
    display: 'inline-block',
    width: 'fit-content',
  },
};

const HeroParticles = styled(Particles)`
  height: 100vh;
  position: absolute;
  left: 0;
  right: 0;
  margin: 0;
  padding: 0;
  z-index: 0;
`;

function Hero() {
  const data = useStaticQuery(graphql`
    query BackgroundImage {
      file(relativePath: { eq: "sunset3.jpg" }) {
        id
        childImageSharp {
          gatsbyImageData(placeholder: TRACED_SVG, width: 1900)
        }
      }
    }
  `);

  const imageData = useMemo(() => getImage(data.file), [data]);
  const bgImage = useMemo(() => convertToBgImage(imageData), [imageData]);

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {}, []);

  return (
    <BackgroundImage
      Tag="section"
      id="top"
      {...bgImage}
      backgroundColor="#000"
    >
      <HeroSection as="div">
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
            <TitleAccent color="#1c52a2">Software Developer</TitleAccent>
          </Title>
        </Parallax>
        <Parallax
          startScroll={25}
          endScroll={1275}
          {...parallaxProps}
        >
          <TitleLink href="#about">About Me</TitleLink>
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
        <HeroParticles
          id="heroParticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={particlesJson}
        />
      </HeroSection>
    </BackgroundImage>
  );
}

export default Hero;

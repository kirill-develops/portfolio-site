import React from 'react';
import styled from 'styled-components';
import { Section, Title, TitleAccent, TitleLink } from '../styles/globalStyles';

const HeroSection = styled(Section)`
  height: 100vh;
  transform: translateY(15%);
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 37.5rem) {
    transform: translateY(-10%);
    width: 75%;
    margin: auto;
  }
`;

const HeroTitle = styled(Title)`
  max-width: 220px;
  min-width: 220px;

  @media (min-width: 80rem) {
    margin: 16px 0 16px;
  }
`;

const HeroAccent = styled(TitleAccent)`
  color: #1c52a2;
`;

const Hero = () => {
  return (
    <HeroSection id='top'>
      <HeroTitle>
        Kirill Tchentsov
        <br />
        <HeroAccent>Web Developer</HeroAccent>
      </HeroTitle>
      <TitleLink href='#about'>Learn More</TitleLink>
      <br />
      <TitleLink href='#projects'>Projects</TitleLink>
      <br />
      <TitleLink href='#contact'>Contact Me</TitleLink>
    </HeroSection>
  );
};

export default Hero;

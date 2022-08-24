import React from 'react';
import styled from 'styled-components';
import { Section, Title, TitleAccent, TitleLink } from '../styles/globalStyles';

const HeroSection = styled(Section)`
  height: 100vh;
`;

const Hero = () => {
  return (
    <HeroSection id='top'>
      <Title>
        Kirill Tchentsov
        <br />
        <TitleAccent>Web Developer</TitleAccent>
      </Title>
      <TitleLink href='#about'>Learn More</TitleLink>
      <br />
      <TitleLink href='#projects'>Projects</TitleLink>
    </HeroSection>
  );
};

export default Hero;

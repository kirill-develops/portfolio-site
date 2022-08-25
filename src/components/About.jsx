import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';
import { Title, Body, BodyAccent, Section } from '../styles/globalStyles';

const AboutSection = styled(Section)`
  background-color: #1c52a2;
  color: #efecef;
  display: flex;
  flex-direction: column;
  height: inherit;
  @media (min-width: 37.5rem) {
    height: 100vh;
  }
`;

const FlexWrapper = styled.div`
  display: flex;
  flex: 1;
  overflow-y: auto;
  flex-wrap: wrap;
  flex-basis: min-content;
  justify-content: center;
  align-items: center;
  gap: 0 24px;

  @media (min-width: 70rem) {
    gap: 0 32px;
  } ;
`;

const PhotoWrapper = styled.div`
  border-radius: 3px;
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175) !important;
  overflow: hidden;
  max-width: 25rem;

  @media (min-width: 37.5rem) {
    width: 40%;
    max-width: fit-content;
  }
`;

const BodyWrapper = styled.article`
  min-width: 280px;
  width: 100%;

  @media (min-width: 37.5rem) {
    width: 40%;
  }
`;

function About() {
  const ScubaPhoto = (
    <StaticImage
      src='../assets/Scuba.jpg'
      alt='Kirill in Scuba Equipment'
      placeholder='tracedSVG'
      layout='constrained'
    />
  );

  return (
    <AboutSection
      id='about'
      color='purple'
    >
      <Title>About Me</Title>
      <FlexWrapper>
        <PhotoWrapper>{ScubaPhoto}</PhotoWrapper>
        <BodyWrapper>
          <Body>
            I've worn many hats. Marketing professional. Bartender. Carpenter.
            Even a scuba diving instructor. It wasn't until I rediscovered
            programming that I really felt in my element.
          </Body>
          <Body>
            I first fell in love with programming in grade 7, creating
            side-scrolling QBasic games. More recently I've been creating
            Full-Stack projects built on modern frameworks like
            <BodyAccent> React.js, Node.js, MySQL </BodyAccent>
            and
            <BodyAccent> JavaScript</BodyAccent>.
          </Body>
          <Body>
            My love for programming stems from a need to be creative and the
            satisfaction you gain from solving problems. I'm always eager to
            learn new languages and frameworks, and excited about all the
            possibilites this industry provides.
          </Body>
          <Body>
            If you would like to talk more, I can be contacted below via email
            or LinkedIn. Thanks for dropping by!
          </Body>
          <Body>
            <BodyAccent>FrontEnd: </BodyAccent>
            React.js, Redux, HTML5, CSS3, AJAX, Next.js
          </Body>
          <Body>
            <BodyAccent>BackEnd: </BodyAccent>
            Python, Node.js, Express.js, Passport.js
          </Body>
          <Body>
            <BodyAccent>Database: </BodyAccent>
            MySQL, Knex.js, MongoDB
          </Body>
        </BodyWrapper>
      </FlexWrapper>
    </AboutSection>
  );
}

export default About;

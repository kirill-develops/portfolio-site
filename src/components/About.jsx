import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';
import colors from '../styles/colors';
import { Title, Body, BodyAccent, Section } from '../styles/globalStyles';

const AboutSection = styled(Section)`
  background-color: ${colors.darkShade};
  color: ${colors.lightShade};
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
  flex-wrap: wrap;
  flex-basis: min-content;
  justify-content: center;
  align-items: center;
  height: fit-content;
  gap: 12px 24px;

  @media (min-width: 70rem) {
    gap: 0 32px;
  } ;
`;

const PhotoWrapper = styled.div`
  border-radius: 6px;
  border: 2px solid ${colors.lightAccent};
  box-shadow: 0 1rem 1rem rgba(0, 0, 0, 0.375);
  height: fit-content;
  margin: 0 16px;
  max-width: 25rem;

  @media (min-width: 37.5rem) {
    width: 40%;
    margin: 0;
    max-width: fit-content;
  }
`;

const BodyWrapper = styled.article`
  min-width: 280px;
  width: 100%;
  padding: 0 8px;
  text-align: center;

  @media (min-width: 37.5rem) {
    text-align: start;
    width: 40%;
  }
`;

function About() {
  const ScubaPhoto = (
    <StaticImage
      src="../images/Scuba.jpg"
      alt="Kirill in Scuba Equipment"
      placeholder="tracedSVG"
      layout="constrained"
    />
  );

  return (
    <AboutSection
      id="about"
      color="purple"
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
            side-scrolling QBasic games way before Pokemon was a thing. More
            recently I've been creating Full-Stack projects built on modern
            frameworks like
            <BodyAccent> React.js, Node.js, MySQL </BodyAccent>&
            <BodyAccent> JavaScript</BodyAccent> and I'm always eager to learn
            new languages & frameworks.
          </Body>
          <Body>
            My love for programming stems from a need to be creative and the
            satisfaction you gain from solving problems. I'm excited about all
            the possibilites this industry provides.
          </Body>
          <Body>
            If you would like to talk more, I can be contacted below via email
            or LinkedIn. Thanks for dropping by!
          </Body>
          <Body>
            <BodyAccent color="#EFEFEF">FrontEnd: </BodyAccent>
            React.js, Redux, HTML5, CSS3, AJAX, Next.js
          </Body>
          <Body>
            <BodyAccent color="#EFEFEF">BackEnd: </BodyAccent>
            Python, Node.js, Express.js, Passport.js
          </Body>
          <Body>
            <BodyAccent color="#EFEFEF">Database: </BodyAccent>
            MySQL, Knex.js, MongoDB
          </Body>
        </BodyWrapper>
      </FlexWrapper>
    </AboutSection>
  );
}

export default About;

import React from 'react';
import styled from 'styled-components';
import {
  Title,
  Body,
  BodyAccent,
} from '../styles/globalStyles';

const Section = styled.section`
  height: calc(100vh - 96px);
  padding: 96px 0;
`;

const About = () => {
  return (
    <Section id="about">
      <Title>About Me</Title>
        <Body>
          I've worn many hats in my time. Marketing professional. Bartender. Carpenter. Even a scuba diving instructor. It wasn't until I rediscovered programming and developing that I really felt in my element.
        </Body>
        <Body>
          I first fell in love with programming in grade 7, creating side-scrolling QBasic games. More recently I've been creating Full-Stack projects built on modern frameworks like
          <BodyAccent> React.js, Node.js, MySQL </BodyAccent>
          and
          <BodyAccent> JavaScript</BodyAccent>
          .
        </Body>
        <Body>
          My love for programming stems from a need to be creative and the satisfaction you gain from solving problems. I'm always eager to learn new languages and frameworks, and excited about all the possibilites this industry provides.
        </Body>
        <Body>
          If you would like to talk more, I can be contacted below via email or LinkedIn. Thanks for dropping by!
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
      </Section>
  );
};

export default About;

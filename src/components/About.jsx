import { StaticImage } from 'gatsby-plugin-image';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Parallax } from 'react-scroll-parallax';
import colors from '../styles/colors';
import { Title, Body, BodyAccent, Section } from '../styles/globalStyles';
import media from '../styles/mediaQueries';
import Bubbles from './Bubbles/Bubbles';

const AboutSection = styled(Section)`
  background: rgb(9, 55, 121);
  background: linear-gradient(
    180deg,
    rgba(9, 55, 121, 1) 0%,
    rgba(9, 58, 128, 1) 11%,
    rgba(8, 52, 117, 1) 21%,
    rgba(8, 48, 110, 1) 30%,
    rgba(2, 0, 36, 1) 88%,
    rgba(2, 0, 36, 1) 93%
  );
  color: ${colors.lightShade};
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 100%;
  min-height: 100vh;
  width: 100%;

  ${media.deviceLandscape`
  height: 100vh;
  `};

  ${media.laptop`
  height: 100vh;
  `};

  ${media.desktop`
  height: 100vh;
  `};
`;

const FlexWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  flex-basis: min-content;
  justify-content: center;
  align-items: center;
  height: fit-content;
  gap: 16px 24px;

  ${media.devicePortrait`
  gap: 32px 24px;
  `};

  ${media.deviceLandscape`
  gap: 0 32px;
  `};

  ${media.laptop`
  gap: 0 32px;
  `}
  ${media.desktop`
  gap: 0 42px;
  `}
`;

const PhotoWrapper = styled.div`
  z-index: 10;
  border-radius: 6px;
  border: 2px solid ${colors.lightAccent};
  box-shadow: 0 1rem 1rem rgba(0, 0, 0, 0.375);
  height: fit-content;
  margin: 0 16px;
  max-width: 25rem;

  ${media.deviceLandscape`
  width: 40%;
  margin: 0;
  max-width: fit-content;
  `};

  ${media.laptop`
  width: 40%;
  margin: 0;
  max-width: fit-content;
  `};

  ${media.desktop`
  width: 35%;
  margin: 0;
  max-width: fit-content;
  `}
`;

const BodyWrapper = styled.article`
  display: flex;
  flex-direction: column;
  min-width: 240px;
  width: 100%;
  padding: 0 8px;
  text-align: center;

  ${media.devicePortrait`
    padding: 0 16px;
  `}

  ${media.deviceLandscape`
    text-align: start;
    padding: unset;
    width: 45%;
    gap: 12px;
    `};

  ${media.laptop`
    text-align: start;
    padding: unset;
    width: 45%;
    gap: 12px;
    `};

  ${media.desktop`
    text-align: start;
    padding: unset;
    width: 40%;
    gap: 12px;
  `};
`;

const AboutBody = styled(Body)`
  z-index: 10;
  margin: auto;
`;

function About() {
  const aboutTargetRef = useRef();

  const [targetElement, setElement] = useState();
  useEffect(() => {
    setElement(aboutTargetRef.current);
  }, []);

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
      className="bubbles"
    >
      <Parallax
        opacity={[-2, 2]}
        translateY={[-100, 0]}
        easing="easeInOutQuad"
      >
        <Title ref={aboutTargetRef}>About Me</Title>
      </Parallax>
      <FlexWrapper>
        <PhotoWrapper>{ScubaPhoto}</PhotoWrapper>
        <BodyWrapper>
          <Parallax
            opacity={[-2, 2]}
            translateY={[-350, 0]}
            targetElement={targetElement}
            speed={-8}
            easing="easeInOutQuad"
          >
            <AboutBody>
              I first fell in love with programming in grade 7, creating
              side-scrolling QBasic games way before Pokemon was a thing.
            </AboutBody>
          </Parallax>
          <Parallax
            opacity={[-2, 2]}
            translateY={[-300, 0]}
            targetElement={targetElement}
            speed={-7}
            easing="easeInOutQuad"
          >
            <AboutBody>
              More recently I've been creating Full-Stack projects built on
              modern frameworks like
              <BodyAccent color={colors.lightAccent}>
                {' '}
                React.js, Node.js, MySQL{' '}
              </BodyAccent>
              &<BodyAccent color={colors.lightAccent}>
                {' '}
                JavaScript
              </BodyAccent>{' '}
              and I'm always eager to learn new languages & frameworks.
            </AboutBody>
          </Parallax>
          <Parallax
            opacity={[-2, 2]}
            translateY={[-275, 0]}
            targetElement={targetElement}
            speed={-6}
            easing="easeInOutQuad"
          >
            <AboutBody>
              I've worn many hats. Marketing professional. Bartender. Carpenter.
              Even a scuba diving instructor. It wasn't until I rediscovered
              programming that I really felt in my element.
            </AboutBody>
          </Parallax>
          <Parallax
            opacity={[-2, 2]}
            translateY={[-250, 0]}
            targetElement={targetElement}
            speed={-5}
            easing="easeInOutQuad"
          >
            <AboutBody>
              My love for programming stems from a need to be creative and the
              satisfaction you gain from solving problems. I'm excited about all
              the possibilites this industry provides.
            </AboutBody>
          </Parallax>
          <Parallax
            opacity={[-2, 2]}
            translateY={[-225, 0]}
            targetElement={targetElement}
            speed={-4}
            easing="easeInOutQuad"
          >
            <AboutBody>
              If you would like to talk more, I can be contacted below via email
              or LinkedIn. Thanks for dropping by!
            </AboutBody>
          </Parallax>
          <Parallax
            opacity={[-2, 2]}
            translateY={[-350, 0]}
            targetElement={targetElement}
            speed={-3}
            easing="easeInOutQuad"
          >
            <AboutBody>
              <BodyAccent color={colors.lightAccent}>FrontEnd: </BodyAccent>
              React.js, Redux, HTML5, CSS3, AJAX, Next.js
            </AboutBody>
          </Parallax>
          <Parallax
            opacity={[-2, 2]}
            translateY={[-350, 0]}
            targetElement={targetElement}
            speed={-2}
            easing="easeInOutQuad"
          >
            <AboutBody>
              <BodyAccent color={colors.lightAccent}>BackEnd: </BodyAccent>
              Python, Node.js, Express.js, Passport.js
            </AboutBody>
          </Parallax>
          <Parallax
            opacity={[-2, 2]}
            translateY={[-350, 0]}
            targetElement={targetElement}
            speed={-1}
            easing="easeInOutQuad"
          >
            <AboutBody>
              <BodyAccent color={colors.lightAccent}>Database: </BodyAccent>
              MySQL, Knex.js, MongoDB
            </AboutBody>
          </Parallax>
        </BodyWrapper>
      </FlexWrapper>
      <Bubbles />
    </AboutSection>
  );
}

export default About;

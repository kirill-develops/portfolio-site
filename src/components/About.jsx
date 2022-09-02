import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';
import { Parallax } from 'react-scroll-parallax';
import Sticky from 'react-sticky-el';
import colors from '../styles/colors';
import { Title, Body, BodyAccent, Section } from '../styles/globalStyles';
import media, { mobileLandscapeBreakpointStr } from '../styles/mediaQueries';
import Bubbles from './Bubbles/Bubbles';
import useMediaQuery from '../utils/useMediaQuery';

const AboutSection = styled(Section)`
  background-color: #1b2845;
  background-image: linear-gradient(315deg, #1b2845 0%, #274060 74%);

  color: ${colors.lightShade};
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: fit-content;
  min-height: 100vh;
  width: 100%;

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
  flex-direction: column;
  flex-basis: min-content;
  justify-content: center;
  align-items: center;
  height: fit-content;
  gap: 16px 24px;

  ${media.mobileLandscape`
  flex-direction:row;
  align-items: flex-start;
  gap: 18px;
  `};

  ${media.tabletPortrait`
  gap: 32px 24px;
  `};

  ${media.tabletLandscape`
  flex-direction:row;
  justify-content: space-between;
  gap: 0 32px;
  `};

  ${media.laptop`
  flex-direction:row;
  justify-content: space-between;
  gap: 0 32px;
  `}

  ${media.desktop`
  flex-direction:row;
  justify-content: space-between;
  gap: 0 42px;
  width: 75%;
  margin: auto;
  `}
`;

const StickyPhoto = styled(Sticky)`
  transition: 0;
  flex-shrink: 2.6;
  height: fit-content;
  width: 90%;
  z-index: 1;

  ${media.tabletPortrait`
  width: 50%;
  `}

  ${media.tabletLandscape`
    flex-shrink:1.8;
    `}
    
    ${media.laptop`
    flex-shrink:1.8;
    `}
    
    ${media.desktop`
    flex-shrink:1.4;
  `}
`;

const PhotoWrapper = styled.div`
  border-radius: 6px;
  border: 2px solid ${colors.lightAccent};
  box-shadow: 0 1rem 1rem rgba(0, 0, 0, 0.375);
`;

const BodyWrapper = styled.article`
  display: flex;
  flex-shrink: 1;
  flex-direction: column;
  min-width: 240px;
  width: 100%;
  padding: 0 8px;
  text-align: center;
  gap: 12px;

  ${media.mobileLandscape`
  padding: unset;
  `}

  ${media.tabletPortrait`
  padding: unset;
  `}

  ${media.tabletLandscape`
  text-align: start;
    padding: unset;
    `};

  ${media.laptop`
    text-align: start;
    padding: unset;
    `};

  ${media.desktop`
    text-align: start;
    padding: unset;
  `};
`;

const AboutBody = styled(Body)`
  z-index: 10;
  margin: auto;
`;

const parallaxProp = {
  opacity: [-1, 1],
  shouldAlwaysCompleteAnimation: true,
};

function About() {
  const ScubaPhoto = (
    <StaticImage
      src="../images/Scuba.jpg"
      alt="Kirill in Scuba Equipment"
      placeholder="tracedSVG"
      layout="constrained"
    />
  );

  const isMobileLandscape = useMediaQuery(mobileLandscapeBreakpointStr);

  return (
    <AboutSection
      id="about"
      className="bubbles"
    >
      <Parallax
        opacity={[-1, 1]}
        translateY={[-100, 0]}
        easing="easeInOutQuad"
      >
        <Title About>About Me</Title>
      </Parallax>
      <FlexWrapper id="StickyBoundry">
        <StickyPhoto
          boundaryElement="#StickyBoundry"
          disabled={!isMobileLandscape}
          dontUpdateHolderHeightWhenSticky
        >
          <PhotoWrapper>{ScubaPhoto}</PhotoWrapper>
        </StickyPhoto>
        <BodyWrapper>
          <Parallax
            translateY={[-350, 0]}
            startScroll={0}
            endScroll={isMobileLandscape ? 400 : 700}
            {...parallaxProp}
          >
            <AboutBody>
              I first fell in love with programming in grade 7, creating
              side-scrolling QBasic games way before Pokemon was a thing.
            </AboutBody>
          </Parallax>
          <Parallax
            translateY={[-300, 0]}
            startScroll={isMobileLandscape ? -40 : -25}
            endScroll={isMobileLandscape ? 375 : 675}
            {...parallaxProp}
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
            translateY={[-275, 0]}
            startScroll={isMobileLandscape ? -80 : -50}
            endScroll={isMobileLandscape ? 350 : 650}
            {...parallaxProp}
          >
            <AboutBody>
              I've worn many hats. A marketing professional. Mixologist.
              Carpenter. Even a scuba diving instructor (highly recommend).
            </AboutBody>
          </Parallax>
          <Parallax
            translateY={[-275, 0]}
            startScroll={isMobileLandscape ? -120 : -75}
            endScroll={isMobileLandscape ? 325 : 625}
            {...parallaxProp}
          >
            <AboutBody>
              It wasn't until I rediscovered software development that I really
              felt in my element.
            </AboutBody>
          </Parallax>
          <Parallax
            translateY={[-225, 0]}
            startScroll={isMobileLandscape ? -160 : -100}
            endScroll={isMobileLandscape ? 300 : 600}
            {...parallaxProp}
          >
            <AboutBody>
              Software Dev let's me be creative and to experience the rush from
              solving complex problems. I'm excited about all the possibilites
              in this industry and where the road ahead will take me.
            </AboutBody>
          </Parallax>
          <Parallax
            translateY={[-200, 0]}
            startScroll={isMobileLandscape ? -200 : -125}
            endScroll={isMobileLandscape ? 275 : 575}
            {...parallaxProp}
          >
            <AboutBody>
              If you would like to talk more, you can find my email and LinkedIn
              below!
            </AboutBody>
          </Parallax>
          <Parallax
            translateY={[-175, 0]}
            startScroll={isMobileLandscape ? -240 : -150}
            endScroll={isMobileLandscape ? 250 : 550}
            {...parallaxProp}
          >
            <AboutBody>Thanks for dropping by 🤓</AboutBody>
          </Parallax>
          <Parallax
            translateY={[-150, 0]}
            startScroll={isMobileLandscape ? -280 : -175}
            endScroll={isMobileLandscape ? 225 : 525}
            {...parallaxProp}
          >
            <AboutBody>
              <BodyAccent color={colors.lightAccent}>FrontEnd: </BodyAccent>
              React.js, Redux, HTML5, CSS3, AJAX, Next.js
            </AboutBody>
          </Parallax>
          <Parallax
            translateY={[-125, 0]}
            startScroll={isMobileLandscape ? -320 : -200}
            endScroll={isMobileLandscape ? 200 : 500}
            {...parallaxProp}
          >
            <AboutBody>
              <BodyAccent color={colors.lightAccent}>BackEnd: </BodyAccent>
              Python, Node.js, Express.js, Passport.js
            </AboutBody>
          </Parallax>
          <Parallax
            translateY={[-100, 0]}
            startScroll={isMobileLandscape ? -360 : -225}
            endScroll={isMobileLandscape ? 175 : 475}
            {...parallaxProp}
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

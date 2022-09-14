import { StaticImage } from 'gatsby-plugin-image';
import React, { useCallback } from 'react';
import styled from 'styled-components';
import { Parallax } from 'react-scroll-parallax';
import Sticky from 'react-sticky-el';
import { loadFull } from 'tsparticles';
import Particles from 'react-tsparticles';
import colors from '../styles/colors';
import { Title, Body, BodyAccent, Section } from '../styles/globalStyles';
import useBreakpoint from '../utils/useBreakpoint';
import media from '../styles/mediaQueries';
import particlesJson from '../assets/bubbles-particlesjs-config.json';

const AboutSection = styled(Section)`
  color: ${colors.lightShade};
  background-color: #1b2845;
  background-image: linear-gradient(315deg, #1b2845 0%, #274060 74%);
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  height: fit-content;
  min-height: 100vh;
  width: 100%;

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
  outline: 0;

  ${media.mobileLandscape`
    flex-direction:row;
    align-items: flex-start;
    gap: 18px;
  `};

  ${media.tabletPortrait`
    gap: 32px 24px;
  `};

  ${media.tabletLandscape`
    align-items: center;
    justify-content: space-between;
    gap: 0 32px;
    width: 95%;
    margin: auto;
  `};

  ${media.laptop`
    width: 90%;
  `}

  ${media.desktop`
    gap: 0 42px;
    width: 82.5%;
  `}
`;

const StickyPhoto = styled(Sticky)`
  z-index: 1;
  transition: 0;
  flex-shrink: 2.6;
  height: fit-content;
  width: 90%;

  ${media.tabletPortrait`
    width: 50%;
  `}

  ${media.tabletLandscape`
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
  `};
`;

const AboutBody = styled(Body)`
  z-index: 1;
  margin: auto;

  ${media.desktop`
    font-size: 1.2rem;
  `}
`;

const AboutParticles = styled(Particles)`
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: 0;
  padding: 0;
  z-index: 0;
`;

// props object for Parallax animation wrapper
const parallaxProp = {
  opacity: [-1, 1],
  shouldAlwaysCompleteAnimation: true,
};

const bodyAccentColor = colors.lightAccent;

function About() {
  const ScubaPhoto = (
    <StaticImage
      src="../images/Scuba.jpg"
      alt="Kirill in Scuba Equipment"
      placeholder="tracedSVG"
      layout="constrained"
    />
  );

  const { isMobileLandscape } = useBreakpoint();

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {}, []);

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
      <FlexWrapper
        id="stickyBoundry"
        tabIndex="0"
      >
        <StickyPhoto
          boundaryElement="#stickyBoundry"
          disabled={!isMobileLandscape}
          dontUpdateHolderHeightWhenSticky
          tabIndex="0 "
        >
          <PhotoWrapper>{ScubaPhoto}</PhotoWrapper>
        </StickyPhoto>
        <BodyWrapper>
          <AboutBody>
            I was first introduced to programming in grade 7, creating
            side-scrolling QBasic games way before Pokemon was a thing.
          </AboutBody>
          <AboutBody>
            More recently I've been creating Full-Stack projects built on modern
            frameworks like
            <BodyAccent color={bodyAccentColor}>
              {' '}
              React.js, Node.js, MySQL{' '}
            </BodyAccent>
            &<BodyAccent color={bodyAccentColor}> JavaScript</BodyAccent> and
            I'm always eager to learn new languages & libraries.
          </AboutBody>
          <AboutBody>
            I've worn many hats in my professional persuits that have given me
            an array of skills such as problem solving, teamwork, customer
            service and communication.
          </AboutBody>
          <AboutBody>
            It wasn't until I rediscovered software development that I really
            felt in my element.
          </AboutBody>
          <AboutBody>
            Software development lets me be creative while providing the
            satisfaction of solving complex problems. It also drives me to seek
            more efficient solutions that lead to better reusability and
            comprehension in my code.
          </AboutBody>
          <AboutBody>
            I look forward to the road ahead and to hearing from you! My contact
            info is down below!
          </AboutBody>
          <AboutBody>Thanks for dropping by 🤓</AboutBody>
        </BodyWrapper>
      </FlexWrapper>
      <AboutParticles
        id="bubblesParticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={particlesJson}
      />
    </AboutSection>
  );
}

export default About;

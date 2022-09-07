import React, { useCallback, useEffect, useMemo, useState } from 'react';

import styled, { css, keyframes } from 'styled-components';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Portal } from 'react-portal';
import media from '../styles/mediaQueries';
import colors from '../styles/colors';
import { Body } from '../styles/globalStyles';
import Modal from './Modal';

const pulseAnimation = keyframes`
  from {
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-transform-origin: center center;
            transform-origin: center center;
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  10% {
    -webkit-transform: scale(0.91);
            transform: scale(0.91);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  17% {
    -webkit-transform: scale(0.98);
            transform: scale(0.98);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  33% {
    -webkit-transform: scale(0.87);
            transform: scale(0.87);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  45% {
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
`;

const Slide = styled.article`
  color: ${colors.white};
  background-color: rgba(0, 0, 0, 0.342);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1), 0 4px 30px rgba(0, 0, 0, 0.15),
    0 1rem 1rem rgba(0, 0, 0, 0.275);
  border-radius: 8px;
  display: flex;
  flex-shrink: 1;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  height: 96%;
  margin: 20px 12px 0;
  padding: 8px 0 12px;

  ${media.mobileLandscape`
    background-color: unset;
    box-shadow: unset;
    backdrop-filter: unset;
    border-radius: unset;
    flex-direction: column;
    align-items: start;
    justify-content: space-between;
    gap: 16px;
    margin: 0;
    padding: 0 16px 0;
  `}

  ${media.tabletLandscape`
    height: fit-content;
    max-height: 50%;
  `};

  ${media.tabletPortrait`
    flex-direction: column-reverse;
    align-items: space-between;
    gap: 0;
    height: fit-content;
    max-height:45%;
    margin: 0 20px 0;
    padding: 20px 0 0;
    
    & ~ & {
      flex-direction: column;
      padding: 0 0 20px;
    }
  `}

  ${media.laptop`
    margin: 0;
    padding: 0 22px 20px;
    `};

  ${media.desktop`
    padding: 0 22px;
  `};
`;

const Card = styled.div`
  max-height: 50%;
  width: 100%;
  border-radius: 8px;
  padding: 12px;
`;

const photoWrapperHover = css`
  transition: 0.3s;
  &:hover {
    cursor: pointer;
    position: relative;
  }

  &:hover::after {
    content: 'Click For Details';
    text-align: center;
    color: ${colors.lightAccent};
    background-color: #000000ab;
    position: absolute;
    top: 50%;
    padding: 8px;
    width: 95%;
  }
`;

const PhotoWrapper = styled(Card)`
  background-color: ${colors.darkShade};
  box-shadow: 0 1rem 1rem rgba(0, 0, 0, 0.375);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 1;
  height: fit-content;
  width: fit-content;
  max-width: 95%;
  padding: 8px;

  ${media.mobileLandscape`
    ${photoWrapperHover}
    max-height:80%;
    margin: auto;
  `};

  ${media.tabletLandscape`
    max-height:70%;
    max-width:unset;
  `}

  ${media.tabletPortrait`
    ${photoWrapperHover}
    max-height:75%;
    margin: 8px 0 8px;
    width:100%;
  `}
    
  ${media.laptop`
    max-height:80%;
    margin: 8px 0 0;
  `}
    
  ${media.desktop`
    max-height:90%;
  `}
`;

const PhotoBorder = styled.div`
  border-radius: 4px;
  border: 1.2px solid ${colors.lightAccent};
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175);
  overflow: hidden;
  height: 100%;

  ${PhotoWrapper}:hover & {
    ${media.mobileLandscape`
    filter: grayscale(1) blur(3px);
    `}

    ${media.tabletPortrait`
    filter: grayscale(1) blur(3px);
    `}
  }
`;

const CardSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  flex-shrink: 1;
  width: 100%;
  height: 100%;

  ${media.mobileLandscape`
    display: hidden;
    margin: auto;
  `};

  ${media.tabletLandscape`
    gap: 64px 0;
    position: relative;
  `};
`;

const DetailsWrapper = styled(Card)`
  width: 98%;
  padding-bottom: 24px;
`;

const CardTitle = styled.h3`
  color: ${colors.white};
  text-transform: uppercase;
  font-size: 2rem;
  text-align: center;
  width: fit-content;
  margin: 28px auto 6px;

  /* ${PhotoWrapper}:hover & {
    animation: ${pulseAnimation} 1.5s ease-in-out infinite both;
    -webkit-animation: ${pulseAnimation} 1.5s ease-in-out infinite both;
  } */

  ${media.mobileLandscape`
    color: ${colors.white};
    font-size: 1.2rem;
    background-color: rgba(115, 118, 131, 0.146);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1),
    0 1rem 1rem rgba(0, 0, 0, 0.275),
    inset 0 0rem 3rem 1px #002a68ac;
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    border-radius: 8px;
    flex-shrink: 1;
    width:100%;
    margin: 0 auto;
    padding: 4px 0;
  `}

  ${media.tabletPortrait`;
    color: ${colors.white};
    font-size: 1.7rem;
    border-radius: 8px;
    flex-shrink: 1;
    width:100%;
    margin: 0 auto;
    padding: 8px 0;
  `}

  ${media.tabletLandscape`
    color: ${colors.white};
    font-size: 1.4rem;
    background-color: rgba(0, 0, 0, 0.342);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1),
    0 4px 30px rgba(0, 0, 0, 0.15),
    0 1rem 1rem rgba(0, 0, 0, 0.275);
    position: absolute;
    top: -35px;
    padding: 8px 0;
    `}

  ${media.laptop`
    font-size: 1.8rem;
    border-radius: 16px;
    top: -40px;
    padding: 12px 0;
  `}
`;

const ModalTitle = styled.h3`
  color: ${colors.mainColor};
  font-family: 'Abril Fatface';
  font-weight: 800;
`;

const CardAccent = styled.span`
  color: ${(prop) => (prop.mobile ? colors.darkShade : colors.darkAccent)};
  font-family: roboto slab;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 0.75rem;
  margin: 8px 0;
`;

function ProjectSlide({ project, breakpoint }) {
  const [isOpen, setIsOpen] = useState(false);

  const projectPhoto = useMemo(() => getImage(project.img), [project]);

  const descriptionContainer = useMemo(
    () =>
      project.description && <Body margin="0.5rem">{project.description}</Body>,
    [project],
  );

  const frontEndContainer = useMemo(
    () =>
      project.frontEnd && (
        <Body margin="0.5rem">
          <CardAccent mobile={breakpoint.isMobilePortrait}>
            Front-End:{' '}
          </CardAccent>
          {project.frontEnd}
        </Body>
      ),
    [project, breakpoint.isMobilePortrait],
  );

  const backEndContainer = useMemo(
    () =>
      project.backEnd && (
        <Body margin="0.5rem">
          <CardAccent mobile={breakpoint.isMobilePortrait}>
            Back-End:{' '}
          </CardAccent>
          {project.backEnd}
        </Body>
      ),
    [project, breakpoint.isMobilePortrait],
  );

  const liveLinkContainer = useMemo(
    () =>
      project.deployedURL && (
        <Body
          margin="0.5rem"
          as="a"
          target="_blank"
          rel="noreferrer"
          href={project.deployedURL}
        >
          Live Deployment
        </Body>
      ),
    [project],
  );

  const mobileDetailsContainer = useMemo(
    () =>
      breakpoint.isMobilePortrait && (
        <DetailsWrapper>
          {descriptionContainer}
          {frontEndContainer}
          {backEndContainer}
          {liveLinkContainer}
        </DetailsWrapper>
      ),
    [
      breakpoint.isMobilePortrait,
      descriptionContainer,
      frontEndContainer,
      backEndContainer,
    ],
  );

  const detailsModal = useMemo(
    () => (
      <Portal>
        <Modal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        >
          <ModalTitle>{project.name}</ModalTitle>
          {descriptionContainer}
          {frontEndContainer}
          {backEndContainer}
          {liveLinkContainer}
        </Modal>
      </Portal>
    ),
    [
      isOpen,
      descriptionContainer,
      frontEndContainer,
      backEndContainer,
      liveLinkContainer,
      project,
    ],
  );

  // stops scrolling on document.body when isOpen is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  // function used to open Modal when not in mobile portrait breakpoint
  const openModal = useCallback(
    () => !breakpoint.isMobilePortrait && setIsOpen(true),
    [breakpoint.isMobilePortrait],
  );

  return (
    <Slide>
      <PhotoWrapper onClick={() => openModal()}>
        <PhotoBorder>
          <GatsbyImage
            image={projectPhoto}
            alt={`Screenshot of ${project.name}`}
          />
        </PhotoBorder>
      </PhotoWrapper>
      <CardSection>
        <CardTitle>{project.name}</CardTitle>
        {mobileDetailsContainer}
      </CardSection>
      {detailsModal}
    </Slide>
  );
}

export default ProjectSlide;

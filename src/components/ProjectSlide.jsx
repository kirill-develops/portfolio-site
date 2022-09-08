import React, { useCallback, useEffect, useMemo, useState } from 'react';

import styled, { css, keyframes } from 'styled-components';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Portal } from 'react-portal';
import ProjectBodyElements from '../elements/ProjectBodyElements';
import Modal from './Modal';
import media from '../styles/mediaQueries';
import colors from '../styles/colors';

const onHoverScale = css`
  &:hover {
    transform: scale(105%);
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
  transition: 0.3s ease;

  &:hover {
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
  cursor: pointer;
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
    
    &:hover {
      transform: translateY(10px);
    }
  `}

  ${media.tabletPortrait`
    ${photoWrapperHover}
    ${onHoverScale};
    max-height:75%;
    margin: 8px 0 8px;
    width:100%;
  `}
    
  ${media.laptop`
    ${onHoverScale};
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
  margin: 18px auto 6px;

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

function ProjectSlide({ project, breakpoint }) {
  const [isOpen, setIsOpen] = useState(false);

  const projectPhoto = useMemo(() => getImage(project.img), [project]);

  const mobileDetailsContainer = useMemo(
    () =>
      breakpoint.isMobilePortrait && (
        <DetailsWrapper>
          <ProjectBodyElements
            project={project}
            isMobilePortrait={breakpoint.isMobilePortrait}
          />
        </DetailsWrapper>
      ),
    [breakpoint.isMobilePortrait],
  );

  const detailsModal = useMemo(
    () => (
      <Portal>
        <Modal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        >
          <ModalTitle>{project.name}</ModalTitle>
          <ProjectBodyElements
            project={project}
            isMobilePortrait={breakpoint.isMobilePortrait}
          />
        </Modal>
      </Portal>
    ),
    [isOpen, project],
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
      <PhotoWrapper
        onClick={() => openModal()}
        tabIndex="0"
      >
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

import React from 'react';
import styled from 'styled-components';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import media from '../styles/mediaQueries';
import colors from '../styles/colors';
import { Body } from '../styles/globalStyles';

const Slide = styled.article`
  padding: auto auto 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0 32px;
  padding: 0 12px 0;
  height: 95%;

  ${media.mobileLandscape`
  gap: 0 24px;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: start;
  height: unset;
  max-height: 80vh;
  `}

  ${media.tabletPortrait`
    height: 45vh;
  `};

  ${media.laptop`
    height: 45vh;
  `};

  ${media.desktop`
    height: 45vh;
  `};
`;

const Card = styled.div`
  height: 50%;
  width: 100%;
  border-radius: 8px;
  padding: 12px;
`;

const PhotoWrapper = styled(Card)`
  box-shadow: 0 1rem 1rem rgba(0, 0, 0, 0.375);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.darkShade};
  height: fit-content;
  max-height: 50%;
  width: fit-content;
  max-width: 95%;
  padding: 16px;

  ${media.mobileLandscape`
    flex-shrink: 1.6;
    width: 100%;
    max-height:unset;
    margin: 8px auto;
  `};

  ${media.tabletLandscape`
    max-width: 45%;
    max-height: 100%;
    align-self: center;
  `}

  ${media.tabletPortrait`
    max-width: 50%;
  `}
`;

const PhotoBorder = styled.div`
  border-radius: 4px;
  border: 1.2px solid ${colors.lightAccent};
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175);
  overflow: hidden;
  height: 100%;
`;

const CardSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${media.mobileLandscape`
    flex-shrink: 1;
    width:100%;
    margin: 8px auto;
  `};

  ${media.tabletLandscape`
  width: 45%;
  flex-direction: column;
  gap: 64px 0;
`};
`;

const DetailsWrapper = styled(Card)`
  box-shadow: 0 1rem 1rem rgba(0, 0, 0, 0.375);
  background-color: ${colors.white};
  height: fit-content;
  padding-bottom: 24px;
  width: 98%;
  background: rgba(112, 116, 133, 0.39);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(11px);
  -webkit-backdrop-filter: blur(11px);
  border: 1px solid rgba(112, 116, 133, 0.17);

  ${media.landscape`
    border-radius: initial;
    background-color: inherit;
    box-shadow: unset;
  `}
`;

const CardTitle = styled.h2`
  margin: 38px auto 6px;
  font-size: 2rem;
  text-align: center;
  width: fit-content;
  text-transform: uppercase;
  color: ${colors.darkShade};

  ${media.landscape`
    margin: 0 auto 42px;
    box-shadow: inset 0px 0rem 3rem 5px rgb(0 0 0 / 38%);
    width:100%;
    border-radius: 8px;
    padding: 12px;
    background: rgba(112, 116, 133, 0.39);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(11px);
    -webkit-backdrop-filter: blur(11px);
    border: 1px solid rgba(112, 116, 133, 0.17);
  `}
`;

const CardAccent = styled.h3`
  color: ${colors.mainColor};
  font: roboto slab;
  font-size: 0.8rem;
`;

function ProjectSlide({ project }) {
  const projectPhoto = getImage(project.img);

  return (
    <Slide>
      <PhotoWrapper>
        <PhotoBorder>
          <GatsbyImage
            image={projectPhoto}
            alt={`Screenshot of ${project.name}`}
          />
        </PhotoBorder>
      </PhotoWrapper>
      <CardSection>
        <CardTitle>{project.name}</CardTitle>
        <DetailsWrapper>
          <Body>{project.description}</Body>
          <CardAccent>Front-End:</CardAccent>
          <CardAccent>Back-End:</CardAccent>
        </DetailsWrapper>
      </CardSection>
    </Slide>
  );
}

export default ProjectSlide;

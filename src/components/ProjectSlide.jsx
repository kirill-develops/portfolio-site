import React from 'react';
import styled from 'styled-components';
import media from '../styles/mediaQueries';
import colors from '../styles/colors';
import { Body } from '../styles/globalStyles';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

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
  overflow: hidden;
  height: fit-content;
  max-height: 50%;
  width: fit-content;
  max-width: 95%;
  padding: 16px;

  ${media.landscape`
    max-width: 45%;
    max-height: 100%;
    align-self: center;
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

  ${media.landscape`
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
    margin: 28px auto 42px;
    box-shadow: inset 0px 0rem 3rem 5px rgb(0 0 0 / 38%);
    background-color: ${colors.mainColor};
    color: ${colors.white};
    width:100%;
    border-radius: 8px;
    padding: 12px;

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
    <article>
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
    </article>
  );
}

export default ProjectSlide;

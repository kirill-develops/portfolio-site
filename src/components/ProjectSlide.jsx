import React from 'react';
import styled from 'styled-components';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import media from '../styles/mediaQueries';
import colors from '../styles/colors';

const Slide = styled.article`
  color: ${colors.white};
  background-color: rgba(68, 68, 68, 0.675);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1), 0 4px 30px rgba(0, 0, 0, 0.15),
    0 1rem 1rem rgba(0, 0, 0, 0.275), inset 0 0 7px 2px #002a6849;
  backdrop-filter: blur(11px);
  -webkit-backdrop-filter: blur(11px);
  border-radius: 8px;
  display: flex;
  flex-shrink: 1;
  gap: 16px;
  flex-direction: column;
  align-items: center;
  height: 96%;
  margin: 20px 12px 0;
  padding: 8px 0 12px;

  ${media.mobileLandscape`
  background-color: unset;
  box-shadow: unset;
  backdrop-filter: unset;
  border-radius: unset;
  gap: 16px;
  margin: 0;
  padding: 0 16px 0;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  `}

  ${media.tabletLandscape`
    height: 100%;
    background-color: unset;
    box-shadow: unset;
    backdrop-filter: unset;
    border-radius: unset;
    justify-content: space-between;
    `};

  ${media.tabletPortrait`
    color: ${colors.white};
    background-color: rgba(68, 68, 68, 0.675);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1),
    0 4px 30px rgba(0, 0, 0, 0.15),
    0 1rem 1rem rgba(0, 0, 0, 0.275),
    inset 0 0 7px 2px #002a6849;
    backdrop-filter: blur(11px);
    -webkit-backdrop-filter: blur(11px);
    border-radius: 8px;
    margin: 0 16px 0;
    max-width: fit-content;
    height: 40%;
    flex-direction: column-reverse;
    padding: 16px 0 8px;
    
    & ~ & {
      flex-direction: column;
      padding: 0 0 16px;
    }
    
  `}

  ${media.laptop`
    height: 100%;
    `};

  ${media.desktop`
    height: 100%;
  `};
`;

const Card = styled.div`
  height: 50%;
  width: 100%;
  border-radius: 8px;
  padding: 12px;
`;

const PhotoWrapper = styled(Card)`
  background-color: ${colors.darkShade};
  box-shadow: 0 1rem 1rem rgba(0, 0, 0, 0.375);
  display: flex;
  flex-shrink: 1;
  align-items: center;
  justify-content: center;
  height: fit-content;
  width: fit-content;
  max-width: 95%;
  padding: 8px;

  ${media.mobileLandscape`
    max-height:226px;
    margin: auto;
  `};

  ${media.tabletLandscape`
    max-height:226px;
    margin: auto;
  `}

  ${media.tabletPortrait`
    max-height:230px;
    margin: 8px 0 0;
    width:100%;
  `}

  ${media.laptop`
    margin: 0;
    max-width: unset;
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
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-shrink: 1;
  justify-content: start;
  align-items: center;

  ${media.mobileLandscape`
    display: hidden;
    flex-shrink: 1;
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

  ${media.mobileLandscape`
  display: none;
  `};

  ${media.tabletLandscape`
    display: none;
    `}

  ${media.tabletPortrait`
  background: unset;
  border: unset;
  border-radius: unset;
  box-shadow: unset;
  backdrop-filter: blur(0);
  display: flex;
  flex-direction: column;
  justify-content: end;
  padding: 12px 12px 0;
  height:unset;
  `}
`;

const CardTitle = styled.h3`
  color: ${colors.lightShade};
  text-transform: uppercase;
  font-size: 2rem;
  text-align: center;
  width: fit-content;
  margin: 28px auto 6px;

  ${media.mobileLandscape`
    color: ${colors.white};
    background-color: rgba(115, 118, 131, 0.146);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1),
    0 1rem 1rem rgba(0, 0, 0, 0.275),
    inset 0 0rem 5rem #002a68ac;
    backdrop-filter: blur(11px);
    -webkit-backdrop-filter: blur(11px);
    flex-shrink: 1;
    font-size: 1.2rem;
    width:100%;
    margin: 0 auto;
    padding: 4px 0;
    border-radius: 8px;
  `}

  ${media.tabletLandscape`
    color: ${colors.white};
    background-color: rgba(0, 0, 0, 0.179);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1),
    0 1rem 1rem rgba(0, 0, 0, 0.275),
    inset 0 0rem 10px 3px #000000ac;
    backdrop-filter: blur(2px);
    -webkit-backdrop-filter: blur(2px);
    border: 1px solid rgba(0, 22, 119, 0.17);
    font-size: 1.4rem;
    flex-shrink: 1;
    width:100%;
    margin: 0 auto;
    padding: 8px 0;
    border-radius: 8px;
    position: absolute;
    top: -35px;
    `}

    ${media.tabletPortrait`;
      color: ${colors.main};
      font-size: 1.7rem;
      flex-shrink: 1;
      width:100%;
      margin: 0 auto;
      padding: 8px 0;
      border-radius: 8px;
    `}

  ${media.laptop`
    color: ${colors.lightShade};
    background-color: rgba(68, 68, 68, 0.675);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1), 0 4px 30px rgba(0, 0, 0, 0.15),
      0 1rem 1rem rgba(0, 0, 0, 0.275), inset 0 0 7px 2px #002a6849;
    backdrop-filter: blur(11px);
    -webkit-backdrop-filter: blur(11px);
    border-radius: 8px;
    width: 90%;
  `}
`;

const CardAccent = styled.h4`
  color: ${colors.lightAccent};
  font: roboto slab;
  font-size: 0.8rem;
  margin: 8px 0;
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
          {/* <Body>{project.description}</Body> */}
          <CardAccent>Front-End:</CardAccent>
          <CardAccent>Back-End:</CardAccent>
        </DetailsWrapper>
      </CardSection>
    </Slide>
  );
}

export default ProjectSlide;

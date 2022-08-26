import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Title, Section, Body } from '../styles/globalStyles';
import colors from '../styles/colors';

// Swiper style dependencies
import 'swiper/scss';
import 'swiper/scss/autoplay';
import 'swiper/scss/pagination';
import '../styles/swiper.scss';

const ProjectsSection = styled(Section)`
  color: ${colors.darkShade};
  background-color: ${colors.lightShade};
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
  overflow: hidden;
  height: fit-content;
  max-height: 50%;
  width: fit-content;
  max-width: 95%;
  padding: 16px;
`;

const PhotoBorder = styled.div`
  border-radius: 4px;
  border: 1.2px solid ${colors.lightAccent};
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175);
  overflow: hidden;
  height: 100%;
`;

const DetailsWrapper = styled(Card)`
  box-shadow: 0 1rem 1rem rgba(0, 0, 0, 0.375);
  height: fit-content;
  background-color: ${colors.white};
  padding-bottom: 24px;
  width: 98%;
`;

const CardTitle = styled.h2`
  margin: 38px auto 6px;
  font-size: 2rem;
  text-align: center;
  width: fit-content;
  text-transform: uppercase;
  color: ${colors.darkShade};
`;

const CardAccent = styled.h3`
  color: ${colors.mainColor};
  font: roboto slab;
  font-size: 0.8rem;
`;

function Projects() {
  const data = useStaticQuery(graphql`
    query {
      allProjectListJson {
        nodes {
          id
          name
          description
          img {
            childImageSharp {
              gatsbyImageData(
                placeholder: TRACED_SVG
                width: 600
                layout: CONSTRAINED
              )
            }
          }
        }
      }
    }
  `);

  const projectSlides = data.allProjectListJson?.nodes
    ?.reverse()
    .map((project) => {
      const projectPhoto = getImage(project.img);

      return (
        <SwiperSlide key={project.id}>
          <PhotoWrapper>
            <PhotoBorder>
              <GatsbyImage
                image={projectPhoto}
                alt={`Screenshot of ${project.name}`}
              />
            </PhotoBorder>
          </PhotoWrapper>
          <CardTitle>{project.name}</CardTitle>
          <DetailsWrapper>
            <Body>{project.description}</Body>
            <CardAccent>Front-End:</CardAccent>
            <CardAccent>Back-End:</CardAccent>
          </DetailsWrapper>
        </SwiperSlide>
      );
    });

  return (
    <ProjectsSection id="projects">
      <Title>Projects</Title>
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ type: 'bullets' }}
        autoplay={{ delay: 5000 }}
        breakpoints={{
          320: { spaceBetween: 32 },
          600: { spaceBetween: 64 },
        }}
        // autoplay
      >
        {projectSlides}
      </Swiper>
    </ProjectsSection>
  );
}

export default Projects;

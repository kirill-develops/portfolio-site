import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Parallax, Autoplay } from 'swiper';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Title, Section, Body } from '../styles/globalStyles';

// Swiper style dependencies
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/parallax';
import '../styles/swiper.css';

const ProjectsSection = styled(Section)`
  color: #2f2756;
  background-color: #ebdbe2;
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
  background-color: #2f2756;
  overflow: hidden;
  height: fit-content;
`;

const PhotoBorder = styled.div`
  border-radius: 4px;
  border: 1.2px solid #c2b368;
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175);
  overflow: hidden;
`;

const DetailsWrapper = styled(Card)`
  box-shadow: 0 1rem 1rem rgba(0, 0, 0, 0.375);
  height: fit-content;
  color: #ebdbe2;
  background-color: #4795cf;
  padding-bottom: 32px;
`;

const CardTitle = styled.h2`
  margin: 38px auto 6px;
  font-size: 2rem;
  text-align: center;
  width: fit-content;
  text-transform: uppercase;
  color: #2f2756;
`;

const CardAccent = styled.h3`
  color: #ebdbe2;
  font: roboto slab;
  font-size: 1rem;
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
                layout: CONSTRAINED
                width: 500
              )
            }
          }
        }
      }
    }
  `);

  const projectSlides = data.allProjectListJson?.nodes?.map((project) => {
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
        modules={[Pagination, Parallax, Autoplay]}
        pagination={{ type: 'bullets' }}
        parallax
        spaceBetween={32}
        // autoplay
      >
        {projectSlides}
      </Swiper>
    </ProjectsSection>
  );
}

export default Projects;

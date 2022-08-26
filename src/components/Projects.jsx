import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Parallax, Autoplay } from 'swiper';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Title, Section, Body } from '../styles/globalStyles';

import '../styles/swiper.css';
// Swiper style dependencies
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/parallax';

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
        <GatsbyImage
          image={projectPhoto}
          alt={`Screenshot of ${project.name}`}
        />
        <h3>{project.name}</h3>
        <Body>{project.description}</Body>
      </SwiperSlide>
    );
  });

  return (
    <Section id="projects">
      <Title>Projects</Title>
      <Swiper
        modules={[Pagination, Parallax, Autoplay]}
        pagination={{ type: 'bullets' }}
        parallax
        // autoplay
      >
        {projectSlides}
      </Swiper>
    </Section>
  );
}

export default Projects;

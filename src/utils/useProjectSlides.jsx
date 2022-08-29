import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { SwiperSlide } from 'swiper/react';
import ProjectSlide from '../components/ProjectSlide';

function useProjectSlide(breakpoint) {
  // this is a Gatsby hook using graphQL to fetch JSON data and use saved images correctly
  const data = useStaticQuery(graphql`
    query {
      allProjectListJson {
        nodes {
          id
          name
          description
          img {
            childImageSharp {
              gatsbyImageData(placeholder: TRACED_SVG, layout: CONSTRAINED)
            }
          }
        }
      }
    }
  `);

  if (breakpoint.isLaptop) return data;

  // creates an array of JSX article elements representing each Project seperately from
  // JSON data parsed by useStaticQuery above in reverse order
  const projectElementArr = data.allProjectListJson?.nodes
    ?.reverse()
    .map((project) => (
      <ProjectSlide
        project={project}
        key={project.id}
      />
    ));

  // utility function wrapping two project elements in SwiperSlide component
  const combineTwoProjectElements = (Arr) =>
    Arr.map((group) => (
      <SwiperSlide key={`double${group[0].key}`}>
        {group[0]}
        {group[1]}
      </SwiperSlide>
    ));

  // utility function wrapping each project element in SwiperSlide component
  const onePerSlide = (projectArr) =>
    projectArr.map((projEl) => (
      <SwiperSlide key={`single${projEl.key}`}>{projEl}</SwiperSlide>
    ));

  // utility function creates 2D array, each internal array consists of two Project elements
  const twoPerSlide = (projectArr) => {
    const projectSlidesArr = [[]];
    let count = 0;

    projectArr.forEach((element) => {
      if (projectSlidesArr[count]?.length === 0) {
        projectSlidesArr[count] = [element];
      } else if (projectSlidesArr[count]?.length === 1) {
        projectSlidesArr[count].push(element);
      } else if (projectSlidesArr[count]?.length === 2) {
        count += 1;
        projectSlidesArr[count] = [element];
      }
    });

    return combineTwoProjectElements(projectSlidesArr);
  };

  if (breakpoint.isTabletPortrait || breakpoint.isTabletLandscape) {
    return twoPerSlide(projectElementArr);
  }

  return onePerSlide(projectElementArr);
}

export default useProjectSlide;

import React, { useMemo } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { SwiperSlide } from 'swiper/react';
import styled from 'styled-components';
import ProjectSlide from '../components/ProjectSlide';
import media from '../styles/mediaQueries';

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  ${media.tabletPortrait`
    gap: 30px;
    justify-content: center;
  `}

  ${media.laptop`
    gap: 30px;
    justify-content: flex-start;
  `}

  ${media.desktop`
    gap: 30px;
    justify-content: flex-start;
  `}
`;

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

  // creates an array of JSX article elements representing each Project seperately from
  // JSON data parsed by useStaticQuery above in reverse order
  const projectElementArr = useMemo(
    () =>
      data.allProjectListJson.nodes.reverse().map((project) => (
        <ProjectSlide
          project={project}
          key={project.id}
        />
      )),
    [data],
  );

  // utility function wrapping two project elements in SwiperSlide component
  const combineTwoProjectElements = (Arr) =>
    Arr.map((group) => (
      <SwiperSlide key={`double${group[0].key}`}>
        <Flex>
          {group[0]}
          {group[1]}
        </Flex>
      </SwiperSlide>
    ));

  // utility function wrapping each project element in SwiperSlide component
  const onePerSlideFn = (projectArr) =>
    projectArr.map((projEl) => (
      <SwiperSlide key={`single${projEl.key}`}>{projEl}</SwiperSlide>
    ));

  // utility function creates 2D array, each internal array consists of two Project elements
  const twoPerSlideFn = (projectArr) => {
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

  if (breakpoint.isMobilePortrait || breakpoint.isMobileLandscape) {
    const onePerSlide = onePerSlideFn(projectElementArr);

    return onePerSlide;
  }

  const twoPerSlide = twoPerSlideFn(projectElementArr);

  return twoPerSlide;
}

export default useProjectSlide;

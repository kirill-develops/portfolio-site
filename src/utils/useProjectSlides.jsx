import React, { useCallback, useMemo } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { SwiperSlide } from 'swiper/react';
import styled from 'styled-components';
import ProjectSlide from '../components/ProjectSlide';
import media from '../styles/mediaQueries';
import useBreakpoint from './useBreakpoint';

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: auto;

  ${media.tabletPortrait`
    justify-content: space-between;
    height: 100%;
    margin: 1rem auto;
  `}

  ${media.tabletLandscape`
    justify-content: space-between;
  `} 
  
  ${media.desktop`
    justify-content: space-between;
    height:100%;
  `};
`;

function useProjectSlide() {
  // this is a Gatsby hook using graphQL to fetch JSON data and use saved images correctly
  const data = useStaticQuery(graphql`
    query {
      allProjectListJson {
        nodes {
          id
          name
          description
          frontEnd
          backEnd
          deployedURL
          img {
            childImageSharp {
              gatsbyImageData(placeholder: TRACED_SVG, layout: CONSTRAINED)
            }
          }
        }
      }
    }
  `);

  const breakpoint = useBreakpoint();

  // creates an array of JSX article elements representing each Project seperately from
  // JSON data parsed by useStaticQuery above in reverse order
  const projectsJsxArr = useMemo(
    () =>
      data.allProjectListJson.nodes
        .slice()
        .reverse()
        .map((project) => (
          <ProjectSlide
            project={project}
            key={project.id}
            breakpoint={breakpoint}
          />
        )),
    [data, breakpoint],
  );

  // utility function wrapping two project elements in SwiperSlide component
  const combineTwoProjectElements = useCallback(
    (Arr) =>
      Arr.map((group) => (
        <SwiperSlide key={`double${group[0].key}`}>
          <Flex>
            {group[0]}
            {group[1]}
          </Flex>
        </SwiperSlide>
      )),
    [projectsJsxArr],
  );

  // utility function wrapping each project element in SwiperSlide component
  const oneProjectPerSlideFn = useCallback(
    (projectArr) =>
      projectArr.map((projEl) => (
        <SwiperSlide key={`single${projEl.key}`}>{projEl}</SwiperSlide>
      )),
    [projectsJsxArr],
  );

  // utility function creates 2D array, each internal array consists of two Project elements
  const twoProjectPerSlideFn = useCallback(
    (projectArr) => {
      const slidesArr = [[]];
      let count = 0;

      projectArr.forEach((element) => {
        if (slidesArr[count]?.length === 0) {
          slidesArr[count] = [element];
        } else if (slidesArr[count]?.length === 1) {
          slidesArr[count].push(element);
        } else if (slidesArr[count]?.length === 2) {
          count += 1;
          slidesArr[count] = [element];
        }
      });

      return combineTwoProjectElements(slidesArr);
    },
    [projectsJsxArr],
  );

  if (breakpoint.isMobilePortrait || breakpoint.isMobileLandscape) {
    const oneProjectPerSlide = oneProjectPerSlideFn(projectsJsxArr);
    return oneProjectPerSlide;
  }

  const twoProjectPerSlide = twoProjectPerSlideFn(projectsJsxArr);
  return twoProjectPerSlide;
}

export default useProjectSlide;

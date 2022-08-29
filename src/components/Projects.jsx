import React from 'react';
import styled from 'styled-components';
import { Swiper } from 'swiper/react';
import { Pagination, Autoplay, Mousewheel, EffectCube } from 'swiper';
import { Parallax } from 'react-scroll-parallax';
import useProjectSlide from '../utils/useProjectSlides';
import useMediaQuery from '../utils/useMediaQuery';
import { Title, Section } from '../styles/globalStyles';
import media, {
  laptopBreakpointStr,
  tabletLandscapeBreakpointStr,
  tabletPortraitBreakpointStr,
} from '../styles/mediaQueries';
import colors from '../styles/colors';
import ProjectLaptopView from './ProjectLaptopView';

// Swiper style dependencies
import 'swiper/scss';
import 'swiper/scss/effect-cube';
import 'swiper/scss/mousewheel';
import 'swiper/scss/autoplay';
import 'swiper/scss/pagination';
import '../styles/swiper.scss';

// styled-component for Projects section
const ProjectsSection = styled(Section)`
  color: ${colors.darkShade};
  background-color: ${colors.lightShade};

  ${media.mobileLandscape`
  height:100%;
  `};
`;

// Wrapper for projects layout allowing interchanging project card layout
// depending on breakpoint definitions
function ProjectView({ children }) {
  return (
    <ProjectsSection id="projects">
      <Parallax
        opacity={[-1, 1]}
        translateY={[-100, 0]}
        easing="easeInOutQuad"
        speed={-5}
        shouldAlwaysCompleteAnimation
      >
        <Title>Projects</Title>
      </Parallax>
      {children}
    </ProjectsSection>
  );
}

function Projects() {
  // array with boolean values if in tablet or laptop view, otherwise assume we
  // are on mobile
  const breakpoint = {
    isTabletPortrait: useMediaQuery(tabletPortraitBreakpointStr),
    isTabletLandscape: useMediaQuery(tabletLandscapeBreakpointStr),
    isLaptop: useMediaQuery(laptopBreakpointStr),
  };

  if (breakpoint.isLaptop) {
    const data = useProjectSlide(breakpoint);

    return (
      <ProjectView>
        <ProjectLaptopView data={data} />
      </ProjectView>
    );
  }

  const projectSlides = useProjectSlide(breakpoint);

  return (
    <ProjectView>
      <Swiper
        modules={[Pagination, Autoplay, Mousewheel, EffectCube]}
        pagination={{ type: 'bullets' }}
        autoplay={{ delay: 5000, disableOnInteraction: true }}
        mousewheel={{ forceToAxis: true, releaseOnEdges: true }}
      >
        {projectSlides}
      </Swiper>
    </ProjectView>
  );
}

export default Projects;

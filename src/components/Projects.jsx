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
  mobileLandscapeBreakpointStr,
  mobilePortraitBreakpointStr,
  tabletLandscapeBreakpointStr,
  tabletPortraitBreakpointStr,
} from '../styles/mediaQueries';
import colors from '../styles/colors';

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
  background-image: linear-gradient(315deg, #fdfcfb 0%, #e2d1c3 100%);
  display: flex;
  flex-direction: column;
  padding: 12px 16px 0;

  ${media.mobileLandscape`
  height:100%;
  `};
`;

const ProjectsSwiper = styled(Swiper)`
  border-radius: 3px;
  overflow-y: hidden;
  margin-left: -16px;
  margin-right: -16px;
  height: 100%;

  ${media.laptop`
    width:85%;
    margin: auto;
  `}

  ${media.desktop`
    width:85%;
    margin: auto;
  `}
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
        <Title Projects>Projects</Title>
      </Parallax>
      {children}
    </ProjectsSection>
  );
}

function Projects() {
  // array with boolean values if in tablet or laptop view, otherwise assume we
  // are on mobile
  const breakpoint = {
    isMobilePortrait: useMediaQuery(mobilePortraitBreakpointStr),
    isMobileLandscape: useMediaQuery(mobileLandscapeBreakpointStr),
    isTabletPortrait: useMediaQuery(tabletPortraitBreakpointStr),
    isTabletLandscape: useMediaQuery(tabletLandscapeBreakpointStr),
    isLaptop: useMediaQuery(laptopBreakpointStr),
  };

  const projectSlides = useProjectSlide(breakpoint);

  return (
    <ProjectView>
      <ProjectsSwiper
        modules={[Pagination, Autoplay, Mousewheel, EffectCube]}
        slidesPerView={1}
        pagination={{ type: 'bullets' }}
        autoplay={{ delay: 5000, disableOnInteraction: true }}
        mousewheel={{ forceToAxis: true, releaseOnEdges: true }}
        breakpoints={{ 601: { slidesPerView: 2 }, 1280: { slidesPerView: 3 } }}
      >
        {projectSlides}
      </ProjectsSwiper>
    </ProjectView>
  );
}

export default Projects;

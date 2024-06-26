import React from 'react';
import styled from 'styled-components';
import { Swiper } from 'swiper/react';
import { Pagination, Autoplay, Mousewheel, EffectCube } from 'swiper';
import { Parallax } from 'react-scroll-parallax';
import useProjectSlide from '../utils/useProjectSlides';
import { Title, Section } from '../styles/globalStyles';
import media from '../styles/mediaQueries';
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
  background-image: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  display: flex;
  flex-direction: column;
  padding: 12px 16px 0;
  min-height: 100vh;
  height: fit-content;

  ${media.mobileLandscape`
    height:100%;
  `};

  ${media.tabletPortrait`
    height:100%;
  `};

  ${media.laptop`
    padding: 0 32px;
  `}

  ${media.desktop`
    padding: 32px 72px 0;
  `}
`;

const ProjectsSwiper = styled(Swiper)`
  overflow-y: hidden;
  margin-left: -16px;
  margin-right: -16px;
  height: 100%;
  flex-grow: 1;

  ${media.tabletLandscape`
    width:92.5%;
    margin: auto;
  `}

  ${media.laptop`
    width:87.5%;
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
        <Title Projects>Previous Projects</Title>
      </Parallax>
      {children}
    </ProjectsSection>
  );
}

function Projects() {
  const projectSlides = useProjectSlide();

  return (
    <ProjectView>
      <ProjectsSwiper
        modules={[Pagination, Autoplay, Mousewheel, EffectCube]}
        slidesPerView={1}
        pagination={{ type: 'bullets' }}
        autoplay={{ delay: 10000, disableOnInteraction: true }}
        mousewheel={{ forceToAxis: true, releaseOnEdges: true }}
        breakpoints={{ 601: { slidesPerView: 2 }, 1280: { slidesPerView: 3 } }}
      >
        {projectSlides}
      </ProjectsSwiper>
    </ProjectView>
  );
}

export default Projects;

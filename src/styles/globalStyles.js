import styled, { createGlobalStyle } from 'styled-components';
import media, { desktopBreakpoint } from './mediaQueries';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    scroll-behavior: smooth;
    transition: 0.1s;
  }

  html{
    font-family: -apple-system, Roboto, sans-serif, serif;
  height: 100vh;

  }

  body {
    margin: 0;
    height: 100vh;

  }

  a {
    &:hover {
      cursor: pointer;
    }
  }
`;

export const Main = styled.main`
  color: #232129;
  height: 100vh;
  width: 100%;
`;

export const Section = styled.section`
  overflow-x: hidden;
  min-height: fit-content;
  padding: 12px 16px 28px;
  height: 100vh;

  ${media.mobileLandscape`
  padding: 12px 16px 28px;
  `}

  ${media.tabletLandscape`
  padding: 32px 32px 32px;
  `}

  ${media.tabletPortrait`
  padding: 32px 32px 32px;
  `}

  ${media.laptop`
  padding: 32px 32px 32px;
  `}

  ${media.desktop`
  padding: 32px 32px 32px;
  `}
`;

const handleTitleMarginTPType = (section) => {
  switch (true) {
    case section.Hero === true:
      return '8px 0 18px';
    case section.About === true:
      return '32px 12px 18px';
    case section.Projects === true:
      return '28px 12px 0';
    default:
      return '8px 12px 18px';
  }
};

export const Title = styled.h2`
  font-size: 2.7rem;
  color: ${(props) => props.color || 'inherit'};
  width: 100%;
  max-width: ${(props) => (props.Hero ? '220px' : 'inherit')};
  min-width: ${(props) => (props.Hero ? '220px' : 'inherit')};
  margin: ${(props) => (!props.Projects ? 'unset' : '16px 0 0')};

  ${media.mobileLandscape`
  max-width: unset;
  margin: 0 0 12px;
  `}

  ${media.tabletPortrait`
  max-width: ${(props) => (props.Hero ? '220px' : 'inherit')};
  margin: ${(props) => handleTitleMarginTPType(props)};
  
  `}
  
  ${media.tabletLandscape`
  max-width: ${(props) => (props.Hero ? '220px' : 'unset')};
  margin: ${(props) => (props.Hero ? '16px 0 16px' : '16px auto 16px')};
  `};

  ${media.laptop`
  margin: ${(props) => (props.Hero ? '16px 0 16px' : '16px auto 16px')};
  `};

  ${media.desktop`
  margin: ${(props) => (props.Hero ? '16px 0 16px' : '16px auto 16px')};
  max-width: ${(props) => (props.Hero ? '220px' : `${desktopBreakpoint}rem`)};
  `};
`;

export const TitleAccent = styled.span`
  color: ${(props) => props.color || '#663399'};
`;

export const TitleLink = styled.a`
  display: inline;
  width: fit-content;
  position: relative;
  text-decoration: none;

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(1);
    height: 1.5px;
    bottom: -0.5px;
    left: 0;
    background-color: #430179;
    transform-origin: bottom left;
    transition: transform 0.3s ease-out;
  }

  &:hover::after,
  :focus::after {
    transform: scaleX(0);
    transform-origin: bottom right;
  }
`;

export const Body = styled.p`
  color: ${(props) => props.color || 'inherit'};
`;

export const BodyAccent = styled.span`
  font-weight: bold;
  color: ${(props) => props.color || 'inherit'};
`;

export default GlobalStyle;

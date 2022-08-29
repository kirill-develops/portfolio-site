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
  min-height: fit-content;
  padding: 12px 16px 28px;
  height: 100vh;

  ${media.mobileLandscape`
  padding: 12px 16px 28px;
  `}

  /* ${media.tabletLandscape`
  padding: 32px 32px 32px;
  `} */

  ${media.laptop`
  padding: 32px 32px 32px;
  `}

  ${media.desktop`
  padding: 32px 32px 32px;
  `}
`;

export const Title = styled.h1`
  margin: 12px 0 40px;
  font-size: 2.7rem;
  color: ${(props) => props.color || 'inherit'};
  width: 100%;
  max-width: ${(props) => (props.Hero ? '220px' : 'inherit')};
  min-width: ${(props) => (props.Hero ? '220px' : 'inherit')};

  ${media.mobileLandscape`
  max-width: unset;
  margin: 0 0 12px;
  `}

  ${media.tabletPortrait`
  max-width: ${(props) => (props.Hero ? '220px' : 'inherit')};
  `}

  ${media.tabletLandscape`
  margin: 16px 0 16px;
  margin: ${(props) => (props.Hero ? '16px 0 16px' : '16px auto 16px')};
  max-width: unset;
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

import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    scroll-behavior: smooth;
    transition: 0.1s;
  }

  body {
    margin:0;
  }

  a {
    &:hover {
      cursor: pointer;
    }
  }
`;

export const Main = styled.main`
  color: #232129;
  font-family: -apple-system, Roboto, sans-serif, serif;
`;

export const Section = styled.section`
  min-height: fit-content;
  padding: 12px 16px 96px;
  height: 100vh;

  @media (min-width: 37.5rem) {
    padding: 32px 32px 96px;
  }
`;

export const Title = styled.h1`
  margin: 12px 0 40px;
  font-size: 2.7rem;
  color: ${(props) => props.color || 'inherit'};
  max-width: ${(props) => (props.Hero ? '220px' : 'inherit')};
  min-width: ${(props) => (props.Hero ? '220px' : 'inherit')};

  @media (min-width: 37.5rem) {
    margin: 16px 0 16px;
    max-width: ${(props) => (props.Hero ? '220px' : '70rem')};
  }
  @media (min-width: 80rem) {
    margin: ${(props) => (props.Hero ? '16px 0 16px' : '16px auto 16px')};
    min-width: ${(props) => (props.Hero ? '220px' : '70rem')};
  }
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

export const Body = styled.p``;

export const BodyAccent = styled.span`
  font-weight: bold;
  color: ${(props) => props.color || 'inherit'};
`;

export default GlobalStyle;

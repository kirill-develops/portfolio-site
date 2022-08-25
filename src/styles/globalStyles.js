import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    scroll-behavior: smooth; 
  }

  a {
    &:hover {
      cursor: pointer;
    }
  }
`;

export const Title = styled.h1`
  margin-top: 0;
  margin-bottom: 64px;
  max-width: 320px;
  font-size: 2.7rem;
`;

export const TitleAccent = styled.span`
  color: #663399;
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
`;

export default GlobalStyle;

import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    scroll-behavior: smooth;
    transition: 0.2s;
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

  @media (min-width: 37.5rem) {
    margin: 16px 0 16px;
    max-width: 80rem;
  }
  @media (min-width: 80rem) {
    margin: 16px auto 16px;
    min-width: 80rem;
  }
`;

export const TitleAccent = styled.span`
  color: #663399;
`;

export const TitleLink = styled.a``;

export const Body = styled.p``;

export const BodyAccent = styled.span`
  font-weight: bold;
`;

export default GlobalStyle;

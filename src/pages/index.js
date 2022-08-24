import * as React from 'react';
import styled from 'styled-components';

import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Footer';
import GlobalStyle from '../styles/globalStyles';

const Main = styled.main`
  color: #232129;
  font-family: -apple-system, Roboto, sans-serif, serif;
  padding: 96px 12px;
  @media (min-width: 48rem) {
    padding: 96px;
  } ;
`;

const IndexPage = () => {
  return (
    <>
      <GlobalStyle />
      <Main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </Main>
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Kirill Tchentsov | Web Developer</title>;

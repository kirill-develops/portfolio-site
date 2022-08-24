import * as React from 'react';

import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Footer';
import GlobalStyle from '../styles/globalStyles';
import { Main } from '../styles/globalStyles';

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

import * as React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';

import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Footer';
import GlobalStyle, { Main } from '../styles/globalStyles';

function IndexPage() {
  return (
    <ParallaxProvider>
      <GlobalStyle />
      <Main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </Main>
    </ParallaxProvider>
  );
}

export default IndexPage;

export const Head = () => <title>Kirill Tchentsov | Web Developer</title>;

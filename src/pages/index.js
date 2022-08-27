import * as React from 'react';

import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Footer';
import GlobalStyle from '../styles/globalStyles';
import { Main } from '../styles/globalStyles';
import { ParallaxProvider } from 'react-scroll-parallax';

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

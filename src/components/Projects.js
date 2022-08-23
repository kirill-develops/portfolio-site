import React from 'react'
import styled from 'styled-components'
import {Title} from '../styles/globalStyles'

const Main = styled.section`
  height: calc(100vh - 96px);
  padding: 96px 0;
`;

const Projects = () => {
  return (
    <Main id="Projects">
      <Title>
        Projects
      </Title>
    </Main>
  )
}

export default Projects;
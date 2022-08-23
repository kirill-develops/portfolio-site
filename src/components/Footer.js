import React from 'react'
import styled from 'styled-components'
import {Title} from '../styles/globalStyles'

const Contact = styled.footer`
  height: calc(50vh - 96px);
  padding: 96px 0;
`;

const Footer = () => {
  return (
    <Contact id='contact'>
      <Title>Connect</Title>
    </Contact>
  )
}

export default Footer;
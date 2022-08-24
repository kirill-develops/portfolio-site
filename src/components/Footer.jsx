import React from 'react';
import styled from 'styled-components';
import { SiGmail, SiGithub, SiLinkedin } from 'react-icons/si';
import { Section, Title } from '../styles/globalStyles';

const Contact = styled(Section)`
  height: inherit;
`;

const LinksWrapper = styled.address`
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  max-width: min-content;
`;

const LogoWrapper = styled.a`
  background-color: white;
  display: inline-flex;
  box-sizing: content-box;
  margin: 0.6rem;
  padding: 0.6rem;
`;

const GithubWrapper = styled(LogoWrapper)`
  color: #272727;
  &: hover {
    color: #207729;
  }
`;

const GmailWrapper = styled(LogoWrapper)`
  color: #272727;
  &: hover {
    color: #be2624;
  }
`;

const LinkedinWrapper = styled(LogoWrapper)`
  color: #272727;
  &: hover {
    color: #0e4fb4;
  }
`;

function Footer() {
  return (
    <Contact id='contact'>
      <Title> Connect </Title>
      <LinksWrapper>
        <LinkedinWrapper
          href='https://www.linkedin.com/in/kirill-tchentsov/'
          target='_blank'
          rel='noreferrer'
        >
          <SiLinkedin size={28} />
        </LinkedinWrapper>
        <GmailWrapper href='mailto:kirill.develops@gmail.com'>
          <SiGmail size={28} />
        </GmailWrapper>
        <GithubWrapper
          href='https://github.com/kirill-develops/'
          target='_blank'
          rel='noreferrer'
        >
          <SiGithub size={28} />
        </GithubWrapper>
      </LinksWrapper>
    </Contact>
  );
}

export default Footer;

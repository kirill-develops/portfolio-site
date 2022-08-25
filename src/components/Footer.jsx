import React from 'react';
import styled from 'styled-components';
import { SiGmail, SiGithub, SiLinkedin, SiClickup } from 'react-icons/si';
import { Section, Title } from '../styles/globalStyles';

const Contact = styled(Section)`
  height: inherit;
  padding-bottom: 64px;
  background-color: #0a0908;
  color: #efecef;
`;

const LinksWrapper = styled.address`
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  max-width: min-content;
`;

const LogoWrapper = styled.a`
  display: inline-flex;
  color: #c9cbcb;
  box-sizing: content-box;
  margin: 1.2rem;
`;

const GithubWrapper = styled(LogoWrapper)`
  &: hover {
    color: #207729;
  }
`;

const GmailWrapper = styled(LogoWrapper)`
  &: hover {
    color: #be2624;
  }
`;

const LinkedinWrapper = styled(LogoWrapper)`
  &: hover {
    color: #0e4fb4;
  }
`;

const ClickUpWrapper = styled(LogoWrapper)`
  display: flex;
  width: fit-content;
  margin: 2.4rem auto 0;
  &: hover {
    color: #d58a27;
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
      <ClickUpWrapper href='#top'>
        <SiClickup size={22} />
      </ClickUpWrapper>
    </Contact>
  );
}

export default Footer;

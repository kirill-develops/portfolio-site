import React from 'react';
import styled from 'styled-components';
import { SiGmail, SiGithub, SiLinkedin, SiClickup } from 'react-icons/si';
import { Section, Title, Body } from '../styles/globalStyles';

const Contact = styled(Section)`
  height: inherit;
  padding-bottom: 64px;
  background-color: #272727;
  color: #efecef;
`;

const LinksContainer = styled.address`
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
    color: #00ac47;
  }
`;

const GmailWrapper = styled(LogoWrapper)`
  &: hover {
    color: #ea4335;
  }
`;

const LinkedinWrapper = styled(LogoWrapper)`
  &: hover {
    color: #0a66c2;
  }
`;

const Divider = styled.hr`
  width: 50%;
  min-width: 300px;
  border-color: #c2b368;
`;

const ClickUpWrapper = styled(LogoWrapper)`
  display: flex;
  width: fit-content;
  margin: 0 auto 2.4rem;
  &: hover {
    color: #d58a27;
  }
`;

const Caption = styled(Body)`
  font-size: 0.8rem;
  text-align: center;
  color: #6d6d6d;
`;

function Footer() {
  return (
    <Contact id="contact">
      <Title color="#c2b368"> Connect </Title>
      <ClickUpWrapper href="#top">
        <SiClickup size={22} />
      </ClickUpWrapper>
      <LinksContainer>
        <LinkedinWrapper
          href="https://www.linkedin.com/in/kirill-tchentsov/"
          target="_blank"
          rel="noreferrer"
        >
          <SiLinkedin size={28} />
        </LinkedinWrapper>
        <GmailWrapper href="mailto:kirill.develops@gmail.com">
          <SiGmail size={28} />
        </GmailWrapper>
        <GithubWrapper
          href="https://github.com/kirill-develops/"
          target="_blank"
          rel="noreferrer"
        >
          <SiGithub size={28} />
        </GithubWrapper>
      </LinksContainer>
      <Divider />
      <Caption>Built with Gatsby and React</Caption>
    </Contact>
  );
}

export default Footer;

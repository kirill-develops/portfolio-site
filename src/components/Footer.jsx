import React from 'react';
import styled from 'styled-components';
import { SiGmail, SiGithub, SiLinkedin, SiClickup } from 'react-icons/si';
import Link from '@mui/material/Link';
import { Section, Title, Body } from '../styles/globalStyles';
import colors from '../styles/colors';
import media from '../styles/mediaQueries';
import useBreakpoint from '../utils/useBreakpoint';

const Contact = styled(Section)`
  background: linear-gradient(to bottom, #323232 0%, #3f3f3f 40%, #1c1c1c 150%),
    linear-gradient(
      to top,
      rgba(255, 255, 255, 0.4) 0%,
      rgba(0, 0, 0, 0.25) 200%
    );
  background-blend-mode: multiply;
  position: relative;
  height: unset;
  padding-bottom: 12px;

  ${media.laptop`
    padding-bottom: 20px;
  
  `}
`;

const LinksContainer = styled.address`
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  max-width: min-content;
`;

const LogoWrapper = styled.a`
  display: inline-flex;
  color: ${colors.logoInactive};
  box-sizing: content-box;
  margin: 1.2rem;
`;

const GithubWrapper = styled(LogoWrapper)`
  &:hover {
    color: ${colors.logoGithub};
  }
`;

const GmailWrapper = styled(LogoWrapper)`
  &:hover {
    color: ${colors.logoGmail};
  }
`;

const LinkedinWrapper = styled(LogoWrapper)`
  &:hover {
    color: ${colors.logoLinkedin};
  }
`;

const Divider = styled.hr`
  width: 50%;
  min-width: 200px;
  border-color: ${colors.mainColor};
`;

const ClickUpWrapper = styled(LogoWrapper)`
  display: flex;
  width: fit-content;
  margin: 1.2rem auto 1.4rem;
  border-radius: 50%;
  padding: 8px;
  border: 1.5px solid ${colors.finePrint};

  ${media.mobileLandscape`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    `}

  ${media.tabletPortrait`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  `}
  
  &:hover {
    color: ${colors.logoUp};
    border-color: ${colors.logoUp};
  }
`;

const Caption = styled(Body)`
  font-size: 0.8rem;
  text-align: center;
  color: ${colors.finePrint};
`;

const FooterTitle = styled(Title)`
  background: -webkit-linear-gradient(
    270deg,
    ${colors.lightAccent},
    ${colors.darkAccent}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

function Footer() {
  const { isMobileLandscape, isMobilePortrait } = useBreakpoint();
  const isMobile = isMobileLandscape || isMobilePortrait;

  return (
    <Contact id="contact">
      <ClickUpWrapper href="#top">
        <SiClickup size={isMobile ? 18 : 22} />
      </ClickUpWrapper>
      <FooterTitle color={colors.mainColor}>Connect</FooterTitle>
      <Body
        color={colors.lightAccent}
        margin={'8px 36px'}
      >
        email:{' '}
        <Link
          sx={`color: ${colors.white}; display: inline-block`}
          my={1}
          href="mailto:kirill.develops@gmail.com"
        >
          kirill.develops@gmail.com
        </Link>
      </Body>
      <LinksContainer>
        <LinkedinWrapper
          href="https://www.linkedin.com/in/kirill-tchentsov/"
          target="_blank"
          rel="noreferrer"
        >
          <SiLinkedin size={isMobile ? 22 : 28} />
        </LinkedinWrapper>
        <GmailWrapper href="mailto:kirill.develops@gmail.com">
          <SiGmail size={isMobile ? 22 : 28} />
        </GmailWrapper>
        <GithubWrapper
          href="https://github.com/kirill-develops/"
          target="_blank"
          rel="noreferrer"
        >
          <SiGithub size={isMobile ? 22 : 28} />
        </GithubWrapper>
      </LinksContainer>
      <Divider />
      <Caption>Built with Gatsby and React</Caption>
    </Contact>
  );
}

export default Footer;

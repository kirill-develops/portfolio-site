import React from 'react';
import styled from 'styled-components';
import { SiGmail, SiGithub, SiLinkedin, SiClickup } from 'react-icons/si';
import { Section, Title, Body } from '../styles/globalStyles';
import colors from '../styles/colors';
import useMediaQuery from '../utils/useMediaQuery';
import media, {
  mobileLandscapeBreakpointStr,
  mobilePortraitBreakpointStr,
} from '../styles/mediaQueries';

const Contact = styled(Section)`
  background-color: ${colors.black};
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

function Footer() {
  const isMobilePortrait = useMediaQuery(mobilePortraitBreakpointStr);
  const isMobileLandscape = useMediaQuery(mobileLandscapeBreakpointStr);
  const isMobile = isMobileLandscape || isMobilePortrait;

  return (
    <Contact id="contact">
      <ClickUpWrapper href="#top">
        <SiClickup size={isMobile ? 18 : 22} />
      </ClickUpWrapper>
      <Title color={colors.mainColor}>Connect</Title>
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

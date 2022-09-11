import React, { useMemo } from 'react';
import {
  SiReact,
  SiReactrouter,
  SiGit,
  SiGithub,
  SiPrettier,
  SiNodedotjs,
  SiZendesk,
  SiJirasoftware,
  SiExpress,
  SiRedux,
  SiMysql,
  SiPostgresql,
  SiSass,
  SiCss3,
  SiHtml5,
  SiMongodb,
  SiJavascript,
  SiNpm,
  SiSlack,
  SiFigma,
  SiStyledcomponents,
  SiMaterialui,
  SiTailwindcss,
  SiPassport,
  SiHeroku,
  SiAmazonaws,
  SiNetlify,
  SiNextdotjs,
  SiGatsby,
  SiAsana,
  SiEslint,
  SiGraphql,
  SiGnubash,
  SiJquery,
  SiJson,
  SiLoom,
  SiMarkdown,
  SiPython,
  SiNumpy,
  SiPandas,
  SiVisualstudiocode,
} from 'react-icons/si';
import styled from 'styled-components';
import colors from '../styles/colors';
import { Section, Title } from '../styles/globalStyles';
import media from '../styles/mediaQueries';

const TechStackSection = styled(Section)`
  background-image: linear-gradient(315deg, #ebedee, ${colors.lightShade});
  height: unset;
  padding-bottom: 12px;

  ${media.laptop`
    padding-bottom: 20px;
  `}
`;

const Flex = styled.article`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.2rem 2.4rem;
  height: 100%;
  margin: 1.2rem auto;

  ${media.laptop`
  padding: 0 32px`}
`;

const LogoDetails = styled.span`
  visibility: hidden;
  background-color: ${colors.black};
  color: ${colors.white};
  text-align: center;
  padding: 5px;
  border-radius: 6px;
  position: absolute;
  z-index: 1;
  top: 100%;
  transform: translateY(50%);
  left: 50%;
  transform: translatex(-50%);
`;

const LogoWrapper = styled.div`
  display: inline-flex;
  position: relative;
  color: ${colors.finePrint};

  &:hover {
    color: ${colors.mainColor};
  }

  &:hover ${LogoDetails} {
    visibility: visible;
  }
`;

const TechTitle = styled(Title)`
  background: -webkit-linear-gradient(
    180deg,
    ${colors.lightAccent},
    ${colors.darkAccent}
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  outline: 0;
`;

function TechStack() {
  const logoSize = useMemo(() => 48, []);

  return (
    <TechStackSection>
      <TechTitle tabIndex="0">Tech Stack</TechTitle>
      <Flex>
        <LogoWrapper>
          <SiReact size={logoSize} />
          <LogoDetails>React.js</LogoDetails>
        </LogoWrapper>
        <LogoWrapper>
          <SiRedux size={logoSize} />
          <LogoDetails>Redux</LogoDetails>
        </LogoWrapper>
        <LogoWrapper>
          <SiReactrouter size={logoSize} />
          <LogoDetails>React Router</LogoDetails>
        </LogoWrapper>
        <LogoWrapper>
          <SiJavascript size={logoSize} />
          <LogoDetails>JavaScript</LogoDetails>
        </LogoWrapper>
        <LogoWrapper>
          <SiJquery size={logoSize} />
          <LogoDetails>JQuery</LogoDetails>
        </LogoWrapper>
        <LogoWrapper>
          <SiJson size={logoSize} />
          <LogoDetails>JSON</LogoDetails>
        </LogoWrapper>
        <LogoWrapper>
          <SiNodedotjs size={logoSize} />
          <LogoDetails>Node.js</LogoDetails>
        </LogoWrapper>
        <LogoWrapper>
          <SiExpress size={logoSize} />
          <LogoDetails>Express</LogoDetails>
        </LogoWrapper>
        <LogoWrapper>
          <SiMysql size={logoSize} />
          <LogoDetails>MySQL</LogoDetails>
        </LogoWrapper>
        <LogoWrapper>
          <SiPostgresql size={logoSize} />
          <LogoDetails>PostgreSQL</LogoDetails>
        </LogoWrapper>
        <LogoWrapper>
          <SiMongodb size={logoSize} />
          <LogoDetails>MongoDB</LogoDetails>
        </LogoWrapper>
        <LogoWrapper>
          <SiGraphql size={logoSize} />
          <LogoDetails>GraphQL</LogoDetails>
        </LogoWrapper>
        <LogoWrapper>
          <SiPython size={logoSize} />
          <LogoDetails>Python</LogoDetails>
        </LogoWrapper>
        <LogoWrapper>
          <SiNumpy size={logoSize} />
          <LogoDetails>NumPy</LogoDetails>
        </LogoWrapper>
        <LogoWrapper>
          <SiPandas size={logoSize} />
          <LogoDetails>Pandas</LogoDetails>
        </LogoWrapper>
        <LogoWrapper>
          <SiGnubash size={logoSize} />
          <LogoDetails>Bash</LogoDetails>
        </LogoWrapper>
        <LogoWrapper>
          <SiGatsby size={logoSize} />
          <LogoDetails>Gatsby</LogoDetails>
        </LogoWrapper>
        <LogoWrapper>
          <SiNextdotjs size={logoSize} />
          <LogoDetails>Next.js</LogoDetails>
        </LogoWrapper>
        <LogoWrapper>
          <SiPassport size={logoSize} />
          <LogoDetails>Passport.js</LogoDetails>
        </LogoWrapper>
        <LogoWrapper>
          <SiEslint size={logoSize} />
          <LogoDetails>ESLint</LogoDetails>
        </LogoWrapper>
        <LogoWrapper>
          <SiPrettier size={logoSize} />
          <LogoDetails>Prettier</LogoDetails>
        </LogoWrapper>
        <LogoWrapper>
          <SiVisualstudiocode size={logoSize} />
          <LogoDetails>VS Code</LogoDetails>
        </LogoWrapper>
        <LogoWrapper>
          <SiStyledcomponents size={logoSize} />
          <LogoDetails>Styled-Components</LogoDetails>
        </LogoWrapper>
        <LogoWrapper>
          <SiMaterialui size={logoSize} />
          <LogoDetails>MaterialUI</LogoDetails>
        </LogoWrapper>
        <LogoWrapper>
          <SiTailwindcss size={logoSize} />
          <LogoDetails>Tailwind</LogoDetails>
        </LogoWrapper>
        <LogoWrapper>
          <SiHtml5 size={logoSize} />
          <LogoDetails>HTML5</LogoDetails>
        </LogoWrapper>
        <LogoWrapper>
          <SiSass size={logoSize} />
          <LogoDetails>Sass</LogoDetails>
        </LogoWrapper>
        <LogoWrapper>
          <SiCss3 size={logoSize} />
          <LogoDetails>CSS3</LogoDetails>
        </LogoWrapper>
        <LogoWrapper>
          <SiGit size={logoSize} />
          <LogoDetails>Git</LogoDetails>
        </LogoWrapper>
        <LogoWrapper>
          <SiGithub size={logoSize} />
          <LogoDetails>GitHub</LogoDetails>
        </LogoWrapper>
        <LogoWrapper>
          <SiNpm size={logoSize} />
          <LogoDetails>NPM</LogoDetails>
        </LogoWrapper>
        <LogoWrapper>
          <SiJirasoftware size={logoSize} />
          <LogoDetails>Jira</LogoDetails>
        </LogoWrapper>
        <LogoWrapper>
          <SiZendesk size={logoSize} />
          <LogoDetails>ZenDesk</LogoDetails>
        </LogoWrapper>
        <LogoWrapper>
          <SiAsana size={logoSize} />
          <LogoDetails>Asana</LogoDetails>
        </LogoWrapper>
        <LogoWrapper>
          <SiSlack size={logoSize} />
          <LogoDetails>Slack</LogoDetails>
        </LogoWrapper>
        <LogoWrapper>
          <SiFigma size={logoSize} />
          <LogoDetails>Figma</LogoDetails>
        </LogoWrapper>
        <LogoWrapper>
          <SiHeroku size={logoSize} />
          <LogoDetails>Heroku</LogoDetails>
        </LogoWrapper>
        <LogoWrapper>
          <SiAmazonaws size={logoSize} />
          <LogoDetails>AWS</LogoDetails>
        </LogoWrapper>
        <LogoWrapper>
          <SiNetlify size={logoSize} />
          <LogoDetails>Netlify</LogoDetails>
        </LogoWrapper>
        <LogoWrapper>
          <SiMarkdown size={logoSize} />
          <LogoDetails>Markdown</LogoDetails>
        </LogoWrapper>
        <LogoWrapper>
          <SiLoom size={logoSize} />
          <LogoDetails>Loom</LogoDetails>
        </LogoWrapper>
      </Flex>
    </TechStackSection>
  );
}

export default TechStack;

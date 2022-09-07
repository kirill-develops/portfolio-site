import React from 'react';
import styled from 'styled-components';
import colors from '../styles/colors';
import { Body } from '../styles/globalStyles';
import media from '../styles/mediaQueries';

const CardAccent = styled.span`
  color: ${(prop) => (prop.mobile ? colors.darkShade : colors.darkAccent)};
  font-family: roboto slab;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 0.75rem;
  margin: 8px 0;
`;

const DeployButton = styled.a`
  background-color: 'initial';
  background-image: linear-gradient(
    360deg,
    ${colors.mainColor},
    ${colors.darkAccent}
  );
  color: ${colors.white};
  font-size: 1rem;
  letter-spacing: 2.5px;
  font-weight: 700;
  text-decoration: none;
  text-transform: uppercase;
  text-align: center;
  display: block;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1), 0 3px 6px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease 0s;
  border-radius: 4px;
  min-width: fit-content;
  padding: 16px 64px;
  margin: 1rem auto 0;

  &:hover {
    cursor: pointer;
    background-image: linear-gradient(
      ${colors.mainColor},
      ${colors.darkAccent}
    );
    box-shadow: 0px 15px 20px rgba(90, 118, 159, 0.5);
    color: ${colors.white};
    background-color: ${colors.darkAccent};
    transform: translateY(-7px);
  }

  ${media.tabletPortrait`
    max-width: fit-content;
  `};
  ${media.tabletLandscape`
    max-width: fit-content;
  `};
`;

function ProjectBodyElement({ data, type = null, isMobilePortrait = false }) {
  const typeData = type && (
    <CardAccent mobile={isMobilePortrait}>{type}: </CardAccent>
  );

  const isLink = data.startsWith('http' || 'www');

  if (isLink) {
    return (
      data && (
        <DeployButton
          target="_blank"
          rel="noreferrer"
          href={data}
        >
          Live Deployment
        </DeployButton>
      )
    );
  }

  return (
    data && (
      <Body margin="0.5rem">
        {typeData}
        {data}
      </Body>
    )
  );
}

export default React.memo(ProjectBodyElement);

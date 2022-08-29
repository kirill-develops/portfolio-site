import { css } from 'styled-components';

export const mobileBreakpoint = 481 / 16;
export const tabletBreakpoint = 601 / 16;
export const laptopBreakpoint = 1025 / 16;
export const desktopBreakpoint = 1081 / 16;

// laptop and tablet breakpoints interpolated into REM
export const mobileLandscapeBreakpointStr = `(max-width:${laptopBreakpoint}rem) and (max-height: ${mobileBreakpoint}rem) and (orientation: landscape)`;
export const tabletPortraitBreakpointStr = `(min-width:${mobileBreakpoint}rem) and (max-width:${laptopBreakpoint}rem) and (orientation: portrait)`;
export const tabletLandscapeBreakpointStr = `(min-width:${mobileBreakpoint}rem) and (max-width:${laptopBreakpoint}rem) and (min-height${mobileBreakpoint}rem) and (max-height:${820 / 16}rem) and (orientation: landscape)`;
export const laptopBreakpointStr = `(min-width:${laptopBreakpoint + 1}rem)`;

const media = {
  landscape: (...args) => css`
    @media (orientation: landscape) {
      ${css(...args)}
    }`,
  desktop: (...args) => css`
    @media (min-width: ${desktopBreakpoint}em) {
      ${css(...args)}
    }`,
  laptop: (...args) => css`
    @media (min-width: ${laptopBreakpoint}em) and (max-width: ${desktopBreakpoint}em) {
      ${css(...args)}
    }`,
  tabletLandscape: (...args) => css`
    @media (min-width: ${tabletBreakpoint + 1}em) and (max-width: ${laptopBreakpoint}em) and (min-height:${mobileBreakpoint + 1}) and (orientation: landscape) {
      ${css(...args)}
    }`,
  tabletPortrait: (...args) => css`
    @media (min-width: ${tabletBreakpoint}em) and (max-width: ${laptopBreakpoint}em) and (orientation: portrait) {
      ${css(...args)}
    }`,
  mobileLandscape: (...args) => css`
  @media (max-width: ${laptopBreakpoint}em) and (max-height: ${mobileBreakpoint}em) and (orientation: landscape) {
    ${css(...args)}
  }`,
};

export default media;

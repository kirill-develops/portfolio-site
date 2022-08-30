import { css } from 'styled-components';

export const mobileBreakpoint = 481 / 16;
export const tabletMinBreakpoint = 601 / 16;
export const laptopBreakpoint = 1025 / 16;
export const tabletMaxBreakpoint = 820 / 16;
export const desktopBreakpoint = 1081 / 16;

// laptop and tablet breakpoints interpolated into REM
export const mobilePortraitStr = `(max-width:${mobileBreakpoint}rem) and (orientation: portrait)`;
export const mobileLandscapeBreakpointStr = `(max-width:${laptopBreakpoint}rem) and (max-height: ${mobileBreakpoint - 1}rem) and (orientation: landscape)`;
export const tabletPortraitBreakpointStr = `(min-width:${mobileBreakpoint}rem) and (max-width:${laptopBreakpoint - 1}rem) and (orientation: portrait)`;
export const tabletLandscapeBreakpointStr = `(min-height:${mobileBreakpoint}rem) and (max-height:${tabletMaxBreakpoint}rem) and (orientation: landscape)`;
export const laptopBreakpointStr = `(min-width:${laptopBreakpoint}rem)`;

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
    @media (min-width: ${tabletMinBreakpoint + 1}em) and (max-width: ${laptopBreakpoint}em) and (min-height:${mobileBreakpoint + 1}em) and (orientation: landscape) {
      ${css(...args)}
    }`,
  tabletPortrait: (...args) => css`
    @media (min-width: ${tabletMinBreakpoint}em) and (max-width: ${laptopBreakpoint}em) and (orientation: portrait) {
      ${css(...args)}
    }`,
  mobileLandscape: (...args) => css`
  @media (max-width: ${laptopBreakpoint}em) and (max-height: ${mobileBreakpoint}em) and (orientation: landscape) {
    ${css(...args)}
  }`,
};

export default media;

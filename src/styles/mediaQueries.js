import { css } from 'styled-components';

export const mobileBreakpoint = 481 / 16; // 30.00625
export const tabletMinBreakpoint = 601 / 16; // 37.5625
export const laptopBreakpoint = 1025 / 16; // 64.0625
export const tabletMaxBreakpoint = 820 / 16; // 51.25
export const desktopBreakpoint = 1081 / 16; // 67.5625

// laptop and tablet breakpoints interpolated into REM
export const mobilePortraitBreakpointStr = `(max-width:${mobileBreakpoint}rem) and (orientation: portrait)`;
export const mobileLandscapeBreakpointStr = `(max-width:${laptopBreakpoint}rem) and (max-height: ${mobileBreakpoint - 1}rem) and (orientation: landscape)`;
export const tabletPortraitBreakpointStr = `(min-width:${mobileBreakpoint}rem) and (max-width:${laptopBreakpoint - 1}rem) and (orientation: portrait)`;
export const tabletLandscapeBreakpointStr = `(min-height:${mobileBreakpoint}rem) and (max-height:${tabletMaxBreakpoint}rem) and (orientation: landscape)`;
export const laptopBreakpointStr = `(min-width:${laptopBreakpoint}rem)`;

const media = {
  desktop: (...args) => css`
    @media (min-width: ${desktopBreakpoint}em) and (min-height: ${tabletMaxBreakpoint}em){
      ${css(...args)}
    }`,
  laptop: (...args) => css`
    @media (min-width: ${laptopBreakpoint}em) and (min-height: ${tabletMinBreakpoint}em) and (orientation: landscape) {
      ${css(...args)}
    }`,
  tabletLandscape: (...args) => css`
    @media (min-width: ${tabletMinBreakpoint}em) and (min-height:${mobileBreakpoint}em) and (orientation: landscape) {
      ${css(...args)}
    }`,
  tabletPortrait: (...args) => css`
    @media (min-width: ${mobileBreakpoint}em) and (orientation: portrait) {
      ${css(...args)}
    }`,
  mobileLandscape: (...args) => css`
  @media (orientation: landscape) {
    ${css(...args)}
  }`,
};

export default media;

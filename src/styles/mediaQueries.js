import { css } from 'styled-components';

export const mobileBreakpoint = 481 / 16;
export const tabletBreakpoint = 601 / 16;
export const laptopBreakpoint = 1025 / 16;
export const desktopBreakpoint = 1081 / 16;

// laptop and tablet breakpoints interpolated into REM
export const mobileLandscapeBreakpointStr = `(max-width:${laptopBreakpoint}rem) and (max-height: ${mobileBreakpoint}rem) and (orientation: landscape)`;
export const tabletBreakpointStr = `(min-width:${mobileBreakpoint}rem) and (max-width:${laptopBreakpoint}rem)`;
export const laptopBreakpointStr = `(min-width:${laptopBreakpoint}rem)`;

const media = {
  devicePortrait: (...args) => css`
    @media (min-width: ${tabletBreakpoint}em) and (max-width: ${laptopBreakpoint}em) and (orientation: portrait) {
      ${css(...args)}
    };
  `,
  deviceLandscape: (...args) => css`
    @media (min-width: ${mobileBreakpoint}em) and (max-width: ${laptopBreakpoint}em) and (orientation: landscape) {
      ${css(...args)}
    };
  `,
  laptop: (...args) => css`
    @media (min-width: ${laptopBreakpoint}em) and (max-width: ${desktopBreakpoint}em) {
      ${css(...args)}
    };
  `,
  desktop: (...args) => css`
    @media (min-width: ${desktopBreakpoint}em) {
      ${css(...args)}
    };
  `,
  landscape: (...args) => css`
    @media (orientation: landscape) {
      ${css(...args)}
    };
  `,
};

export default media;

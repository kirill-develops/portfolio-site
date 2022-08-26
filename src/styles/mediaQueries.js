import { css } from 'styled-components';

export const mobileBreakpoint = 481 / 16;
export const tabletBreakpoint = 600 / 16;
export const laptopBreakpoint = 1024 / 16;
export const desktopBreakpoint = 1080 / 16;

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

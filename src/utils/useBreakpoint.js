import React from 'react';
import { laptopBreakpoint, mobileBreakpoint, tabletMaxBreakpoint } from '../styles/mediaQueries';
import useMediaQuery from './useMediaQuery';

// laptop and tablet breakpoints interpolated into REM
const mobilePortraitBreakpointStr = `(max-width:${mobileBreakpoint}rem) and (orientation: portrait)`;
const mobileLandscapeBreakpointStr = `(max-width:${laptopBreakpoint}rem) and (max-height: ${mobileBreakpoint - 1}rem) and (orientation: landscape)`;
const tabletPortraitBreakpointStr = `(min-width:${mobileBreakpoint}rem) and (max-width:${laptopBreakpoint - 1}rem) and (orientation: portrait)`;
const tabletLandscapeBreakpointStr = `(min-height:${mobileBreakpoint}rem) and (max-height:${tabletMaxBreakpoint}rem) and (orientation: landscape)`;
const laptopBreakpointStr = `(min-width:${laptopBreakpoint}rem)`;

function useBreakpoint() {
  // array with boolean values if in tablet or laptop view, otherwise assume we
  // are on mobile
  const breakpoint = {
    isMobilePortrait: useMediaQuery(mobilePortraitBreakpointStr),
    isMobileLandscape: useMediaQuery(mobileLandscapeBreakpointStr),
    isTabletPortrait: useMediaQuery(tabletPortraitBreakpointStr),
    isTabletLandscape: useMediaQuery(tabletLandscapeBreakpointStr),
    isLaptop: useMediaQuery(laptopBreakpointStr),
  };
  return (
    breakpoint
  );
}

export default useBreakpoint;

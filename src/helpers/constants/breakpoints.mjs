const breakpoints = {
  mobile: '320px',
  mobileMax: '767px',
  tablet: '768px',
  desktop: '1024px',
  desktopLarge: '1366px',
  desktopXL: '2000px',
  maxPageWidth: '1380px'
};

/**
 * Define a media-query with min-width defined at a specific breakpoint
 *
 * @param breakpoint string Name of the breakpoint
 * @param media string Media target, one of ['all', 'screen', 'print']
 *
 * @return string
 */
export const mediaQueryStartingAt = (breakpoint, media = 'all') =>
  breakpoint ? `@media ${media} and (min-width: ${breakpoints[breakpoint]})` : '';

/**
 * Define a media-query with max-width defined at a specific breakpoint
 *
 * @param breakpoint string Name of the breakpoint
 * @param media string Media target, one of ['all', 'screen', 'print']
 *
 * @return string
 */
export const mediaQueryUpTo = (breakpoint, media = 'all') =>
  breakpoint ? `@media ${media} and (max-width: ${breakpoints[breakpoint]})` : '';

export default breakpoints;

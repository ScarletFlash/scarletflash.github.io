const REDUCED_MOTION_MEDIA_QUERY = '(prefers-reduced-motion: reduce)';

export function getReducedMotionMediaQueryList(): MediaQueryList {
  return window.matchMedia(REDUCED_MOTION_MEDIA_QUERY);
}

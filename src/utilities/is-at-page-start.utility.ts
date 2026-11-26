import { type ScrollMeasurement } from '../declarations/interfaces/scroll-measurement.interface';
import { PAGE_EDGE_TOLERANCE_PIXELS } from './page-edge-tolerance-pixels';
import { PAGE_START_SCROLL_POSITION } from './page-start-scroll-position';

export function isAtPageStart({ scrollPosition }: ScrollMeasurement): boolean {
  return scrollPosition <= PAGE_START_SCROLL_POSITION + PAGE_EDGE_TOLERANCE_PIXELS;
}

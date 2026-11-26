import { type ScrollMeasurement } from '../declarations/interfaces/scroll-measurement.interface';
import { PAGE_EDGE_TOLERANCE_PIXELS } from './page-edge-tolerance-pixels';

export function isAtPageEnd({ scrollPosition, maximumScrollPosition }: ScrollMeasurement): boolean {
  return scrollPosition >= maximumScrollPosition - PAGE_EDGE_TOLERANCE_PIXELS;
}

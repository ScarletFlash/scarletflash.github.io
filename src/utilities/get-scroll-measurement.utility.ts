import { type ScrollMeasurement } from '../declarations/interfaces/scroll-measurement.interface';
import { getScrollingElement } from './get-scrolling-element.utility';
import { PAGE_START_SCROLL_POSITION } from './page-start-scroll-position';

export function getScrollMeasurement(): ScrollMeasurement {
  return {
    scrollPosition: window.scrollY,
    maximumScrollPosition: Math.max(getScrollingElement().scrollHeight - window.innerHeight, PAGE_START_SCROLL_POSITION)
  };
}

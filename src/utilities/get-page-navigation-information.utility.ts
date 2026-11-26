import { type PageNavigationInformation } from '../declarations/interfaces/page-navigation-information.interface';
import { isPageDirection } from './is-page-direction.utility';

export function getPageNavigationInformation(navigationInformation: unknown): PageNavigationInformation | null {
  if (navigationInformation === undefined) {
    return null;
  }

  if (
    typeof navigationInformation !== 'object' ||
    navigationInformation === null ||
    !('direction' in navigationInformation) ||
    !isPageDirection(navigationInformation.direction) ||
    !('velocityPixelsPerMillisecond' in navigationInformation) ||
    (navigationInformation.velocityPixelsPerMillisecond !== null &&
      typeof navigationInformation.velocityPixelsPerMillisecond !== 'number')
  ) {
    throw new Error(
      `Expected the home page navigation information to carry a page direction and a velocity, but got [${JSON.stringify(navigationInformation)}]`
    );
  }

  return {
    direction: navigationInformation.direction,
    velocityPixelsPerMillisecond: navigationInformation.velocityPixelsPerMillisecond
  };
}

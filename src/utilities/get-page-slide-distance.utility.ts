import { type PageDirection } from '../declarations/enums/page-direction.enum';

export function getPageSlideDistance(direction: PageDirection): number {
  return direction * window.innerHeight;
}

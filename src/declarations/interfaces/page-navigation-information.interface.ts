import { type PageDirection } from '../enums/page-direction.enum';

export interface PageNavigationInformation {
  readonly direction: PageDirection;
  readonly velocityPixelsPerMillisecond: number | null;
}

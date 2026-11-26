import { inject } from '@angular/core';
import { type ViewTransitionInfo } from '@angular/router';
import { PageSlideService } from '../services/page-slide.service';

export function slidePageViewTransition(viewTransitionInformation: ViewTransitionInfo): void {
  inject(PageSlideService).slide(viewTransitionInformation);
}

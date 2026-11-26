import { NavigationEnd, type Event } from '@angular/router';

export function isNavigationEnd(event: Event): event is NavigationEnd {
  return event instanceof NavigationEnd;
}

import { Observable, Subscriber, TeardownLogic } from 'rxjs';

export const getMutationObservable = (
  element: HTMLElement,
  config?: MutationObserverInit
): Observable<MutationRecord[]> => {
  return new Observable(
    (subscriber: Subscriber<MutationRecord[]>): TeardownLogic => {
      const mutationCallback: MutationCallback = (mutations: MutationRecord[]): void => {
        subscriber.next(mutations);
      };
      const observer: MutationObserver = new MutationObserver(mutationCallback);
      observer.observe(element, config);

      subscriber.on

      concat(...sources).subscribe(
        (value: MutationRecord[]) => {
          values.push(value);
        },
        (error: Error) => {
          subscriber.error(error);
        },
        () => {
          subscriber.next(values);
          subscriber.complete();
        }
      );
    }
  );
};

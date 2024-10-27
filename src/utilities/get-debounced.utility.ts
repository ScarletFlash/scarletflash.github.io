export function getDebounced<F extends (...params: unknown[]) => void>(
  originalFunction: F,
  delayMs: number
): (...params: Parameters<F>) => void {
  let timeoutId: number = NaN;

  return (...params: Parameters<F>): void => {
    if (!Number.isNaN(timeoutId)) {
      window.clearTimeout(timeoutId);
    }

    timeoutId = window.setTimeout(() => {
      originalFunction(...params);
      timeoutId = NaN;
    }, delayMs);
  };
}

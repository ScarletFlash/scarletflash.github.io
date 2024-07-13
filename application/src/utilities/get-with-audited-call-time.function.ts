export function getWithAuditedCallTime<F extends (...params: any[]) => void>(
  originalFunction: F,
  auditTimeMs: number
): (...params: Parameters<F>) => void {
  let lastCallTimeMs: number = NaN;
  let timeoutId: number = NaN;

  return (...params: Parameters<F>): void => {
    const currentTimeMs: number = Date.now();
    if (!Number.isNaN(timeoutId)) {
      window.clearTimeout(timeoutId);
    }

    const elapsedTimeMs: number = currentTimeMs - lastCallTimeMs;
    if (Number.isNaN(lastCallTimeMs) || elapsedTimeMs >= auditTimeMs) {
      lastCallTimeMs = currentTimeMs;
      originalFunction(...params);
      return;
    }

    timeoutId = window.setTimeout(() => {
      originalFunction(...params);
      lastCallTimeMs = currentTimeMs;
      timeoutId = NaN;
    }, auditTimeMs - elapsedTimeMs);
  };
}

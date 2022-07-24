export function isNill<T>(input: T | undefined | null): input is undefined | null;
export function isNill<T>(input: NonNullable<T>): false;
export function isNill(input: unknown): input is null | undefined {
  return input === null || input === undefined;
}

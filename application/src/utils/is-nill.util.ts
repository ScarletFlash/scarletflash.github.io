export function isNill(input: undefined): input is undefined;
export function isNill(input: null): input is null;
export function isNill<T>(input: T | null): input is null;
export function isNill<T>(input: T | undefined): input is undefined;
export function isNill<T>(input: NonNullable<T>): false;
export function isNill(input: unknown): input is null | undefined {
  return input === null || input === undefined;
}

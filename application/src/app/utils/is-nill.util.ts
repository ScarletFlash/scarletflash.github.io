export function isNill(input: unknown): input is null | undefined {
  return input === null || input === undefined;
}

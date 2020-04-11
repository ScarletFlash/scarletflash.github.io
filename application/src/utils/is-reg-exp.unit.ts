export function isRegExp(input: unknown): input is RegExp {
  return input instanceof RegExp;
}

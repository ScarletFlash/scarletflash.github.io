export function isRegExp(input: RegExp): input is RegExp {
  return input instanceof RegExp;
}

export function isFunction(input: unknown): input is Function {
  return typeof input === 'function';
}

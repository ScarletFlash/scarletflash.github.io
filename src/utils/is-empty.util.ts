import { isNill } from './is-nill.util';

export function isEmpty<T>(input: T[]): input is [];
export function isEmpty(input: object): input is {};
export function isEmpty(input: string): input is '';
export function isEmpty(input: unknown): boolean {
  if (isNill(input)) {
    return true;
  }

  if (Array.isArray(input)) {
    return isEmptyArray(input);
  }

  if (isObject(input)) {
    return isEmptyObject(input);
  }

  if (isString(input)) {
    return isEmptyString(input);
  }

  return false;
}

function isEmptyArray(input: unknown): input is [] {
  return Array.isArray(input) && Object.is(input.length, 0);
}

function isEmptyObject(input: unknown): input is {} {
  if (!isObject(input)) {
    return false;
  }
  const objectProperties: string[] = Object.keys(input);
  return isEmptyArray(objectProperties);
}

function isEmptyString(input: unknown): input is '' {
  return isString(input) && Object.is(input.length, 0);
}

function isObject(input: unknown): input is object {
  return typeof input === 'object' && !Array.isArray(input);
}

function isString(input: unknown): input is string {
  return typeof input === 'string';
}

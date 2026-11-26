import { type TupleOfLength } from '../declarations/types/tuple-of-length.type';

export function isArrayOfLength<I, L extends number>(input: I[], targetLength: L): input is TupleOfLength<I, L> {
  if (!Array.isArray(input)) {
    return false;
  }

  return input.length === targetLength;
}

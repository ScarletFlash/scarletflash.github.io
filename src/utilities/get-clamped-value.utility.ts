interface GetClampedValueParameters {
  readonly value: number;
  readonly minimum: number;
  readonly maximum: number;
}

export function getClampedValue({ value, minimum, maximum }: GetClampedValueParameters): number {
  if (minimum > maximum) {
    throw new Error(`Expected minimum [${minimum}] to be less than or equal to maximum [${maximum}]`);
  }

  return Math.min(Math.max(value, minimum), maximum);
}

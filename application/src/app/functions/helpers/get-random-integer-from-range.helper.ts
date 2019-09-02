export const getRandomIntegerFromRange: Function = (rangeStart: number, rangeEnd: number): number => {
  const possibleValuesCount: number = rangeEnd + 1 - rangeStart;
  return Math.floor(Math.random() * possibleValuesCount) + rangeStart;
};

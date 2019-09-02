import { getRandomIntegerFromRange } from './get-random-integer-from-range.helper';

export const shuffleArray: Function = <T = unknown>(array: T[]): T[] => {
  return [...array].sort(() => getRandomIntegerFromRange(-1, 1));
};

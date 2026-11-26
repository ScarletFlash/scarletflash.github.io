import { BackgroundMotion } from '../declarations/enums/background-motion.enum';

const backgroundMotions: ReadonlySet<unknown> = new Set<unknown>(Object.values(BackgroundMotion));

export function isBackgroundMotion(value: unknown): value is BackgroundMotion {
  return backgroundMotions.has(value);
}

import { PageDirection } from "../declarations/enums/page-direction.enum";

const pageDirections: ReadonlySet<unknown> = new Set<unknown>([
  PageDirection.Previous,
  PageDirection.Next,
]);

export function isPageDirection(value: unknown): value is PageDirection {
  return pageDirections.has(value);
}

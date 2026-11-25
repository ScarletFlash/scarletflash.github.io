export function getScrollingElement(): Element {
  const scrollingElement: Element | null = document.scrollingElement;
  if (scrollingElement === null) {
    throw new Error("Expected the document to have a scrolling element");
  }

  return scrollingElement;
}

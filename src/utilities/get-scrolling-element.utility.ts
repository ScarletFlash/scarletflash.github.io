export function getScrollingElement(): Element {
  const scrollingElement = document.scrollingElement;
  if (scrollingElement === null) {
    throw new Error('Expected the document to have a scrolling element');
  }

  return scrollingElement;
}

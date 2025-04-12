export function checkIsElement(
  element: HTMLElement | Element | null
): element is HTMLElement {
  return element != null;
}

export function isVisibleInContainer(
  container: Element,
  element: Element
): boolean {
  const containerRect = container.getBoundingClientRect();
  const elementRect = element.getBoundingClientRect();

  return elementRect.top <= containerRect.top
    ? containerRect.top - elementRect.top <= elementRect.height
    : elementRect.bottom - containerRect.bottom <= elementRect.height;
}

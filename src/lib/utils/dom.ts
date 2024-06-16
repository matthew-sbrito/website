export function checkIsElement(
  element: HTMLElement | Element | null
): element is HTMLElement {
  return element != null;
}

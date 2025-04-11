export type Grouping<K, T> = {
  key: K;
  sources: T[];
};

export function groupBy<T, K>(
  array: T[],
  getterKey: (value: T) => K
): Grouping<K, T>[] {
  const map = new Map<K, T[]>();
  const grouping = [] as Grouping<K, T>[];

  for (const item of array) {
    const key = getterKey(item);
    const items = map.get(key) ?? [];
    map.set(key, [...items, item]);
  }

  for (const [key, sources] of map.entries()) {
    grouping.push({ key, sources });
  }

  return grouping;
}

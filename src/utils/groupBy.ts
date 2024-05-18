type KeyExtractor<T> = (item: T) => number;

export function groupBy<T>(array: T[], keyExtractor: KeyExtractor<T>) {
  return array.reduce(
    (result, item) => {
      const key = keyExtractor(item);

      if (!result[key]) {
        result[key] = [];
      }

      result[key]?.push(item);

      return result;
    },
    {} as { [key: string]: T[] },
  );
}

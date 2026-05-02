/** Returns a new array with duplicate entries removed, using `key` to determine uniqueness. */
export function uniqBy<T>(array: T[], key: (item: T) => string): T[] {
  const seen = new Set<string>()
  return array.filter((item) => {
    const k = key(item)
    return seen.has(k) ? false : seen.add(k)
  })
}

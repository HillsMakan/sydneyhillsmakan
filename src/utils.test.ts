import { describe, it, expect } from 'vitest'
import { uniqBy } from './utils.ts'

describe('uniqBy', () => {
  it('returns an empty array when given an empty array', () => {
    expect(uniqBy([], String)).toEqual([])
  })

  it('returns the same single-element array unchanged', () => {
    const input = [{ id: 'a', value: 1 }]
    expect(uniqBy(input, (x) => x.id)).toEqual(input)
  })

  it('removes duplicate entries with the same key', () => {
    const input = [
      { id: 'a', value: 1 },
      { id: 'b', value: 2 },
      { id: 'a', value: 3 }
    ]
    const result = uniqBy(input, (x) => x.id)
    expect(result).toHaveLength(2)
    expect(result[0]).toEqual({ id: 'a', value: 1 })
    expect(result[1]).toEqual({ id: 'b', value: 2 })
  })

  it('keeps the first occurrence when there are duplicates', () => {
    const input = [
      { id: 'x', label: 'first' },
      { id: 'x', label: 'second' }
    ]
    const result = uniqBy(input, (x) => x.id)
    expect(result).toHaveLength(1)
    expect(result[0].label).toBe('first')
  })

  it('handles all-unique entries without modification', () => {
    const input = [{ id: '1' }, { id: '2' }, { id: '3' }]
    expect(uniqBy(input, (x) => x.id)).toEqual(input)
  })

  it('handles all-duplicate entries returning only the first', () => {
    const input = [{ id: 'z', n: 1 }, { id: 'z', n: 2 }, { id: 'z', n: 3 }]
    const result = uniqBy(input, (x) => x.id)
    expect(result).toHaveLength(1)
    expect(result[0].n).toBe(1)
  })

  it('supports JSON.stringify as key function for object references', () => {
    const ref = { id: 'cats/food' }
    const input = [ref, { id: 'cats/drink' }, ref]
    const result = uniqBy(input, JSON.stringify)
    expect(result).toHaveLength(2)
  })

  it('is non-mutating — does not modify the original array', () => {
    const input = [{ id: 'a' }, { id: 'a' }]
    const copy = [...input]
    uniqBy(input, (x) => x.id)
    expect(input).toEqual(copy)
  })
})

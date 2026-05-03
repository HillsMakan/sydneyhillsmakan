import { describe, expect, it } from 'vitest'
import {
  extractCoordinatesFromFrontmatter,
  parseRunOptions,
  shouldGeocodeFrontmatter
} from './utils/geocode.mts'

describe('parseRunOptions', () => {
  it('uses default options when no args or env are provided', () => {
    const options = parseRunOptions([], {})
    expect(options).toEqual({ limit: -1, refreshAll: false })
  })

  it('reads limit and refresh-all from args', () => {
    const options = parseRunOptions(['--limit=25', '--refresh-all'], {})
    expect(options).toEqual({ limit: 25, refreshAll: true })
  })

  it('reads refresh-all and limit from environment', () => {
    const options = parseRunOptions([], {
      LIMIT: '5',
      REFRESH_ALL: 'true'
    })
    expect(options).toEqual({ limit: 5, refreshAll: true })
  })
})

describe('extractCoordinatesFromFrontmatter', () => {
  it('extracts decimal coordinates', () => {
    const fm = `title: Test\nregion: nsw\ncoordinates:\n  lat: -33.8688\n  lng: 151.2093`
    expect(extractCoordinatesFromFrontmatter(fm)).toEqual({
      lat: -33.8688,
      lng: 151.2093
    })
  })

  it('extracts integer coordinates', () => {
    const fm = `title: Test\nregion: nsw\ncoordinates:\n  lat: -33\n  lng: 151`
    expect(extractCoordinatesFromFrontmatter(fm)).toEqual({
      lat: -33,
      lng: 151
    })
  })

  it('returns null for malformed coordinate blocks', () => {
    const fm = `title: Test\nregion: nsw\ncoordinates:\n  lat: invalid\n  lng: 151.2093`
    expect(extractCoordinatesFromFrontmatter(fm)).toBeNull()
  })
})

describe('shouldGeocodeFrontmatter', () => {
  const regionId = 'nsw'

  it('returns false for valid existing regional coordinates', () => {
    const fm = `title: Test\nregion: nsw\ncoordinates:\n  lat: -33.8688\n  lng: 151.2093`
    expect(shouldGeocodeFrontmatter(fm, regionId, false)).toBe(false)
  })

  it('returns true when refresh-all is enabled', () => {
    const fm = `title: Test\nregion: nsw\ncoordinates:\n  lat: -33.8688\n  lng: 151.2093`
    expect(shouldGeocodeFrontmatter(fm, regionId, true)).toBe(true)
  })

  it('returns true when coordinates are missing', () => {
    const fm = `title: Test\nregion: nsw`
    expect(shouldGeocodeFrontmatter(fm, regionId, false)).toBe(true)
  })

  it('returns true when coordinates are malformed', () => {
    const fm = `title: Test\nregion: nsw\ncoordinates:\n  lat: x\n  lng: y`
    expect(shouldGeocodeFrontmatter(fm, regionId, false)).toBe(true)
  })

  it('returns true when coordinates are outside region bounds', () => {
    const fm = `title: Test\nregion: nsw\ncoordinates:\n  lat: -37.8136\n  lng: 144.9631`
    expect(shouldGeocodeFrontmatter(fm, regionId, false)).toBe(true)
  })
})

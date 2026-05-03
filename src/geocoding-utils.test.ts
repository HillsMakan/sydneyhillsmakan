import { describe, it, expect } from 'vitest'

// We'll define these functions in src/geocoding-utils.ts
import { analyzePartnerGeocoding } from './geocoding-utils'

describe('analyzePartnerGeocoding', () => {
  it('identifies missing coordinates', () => {
    const content = `---
title: Test Partner
region: nsw
---
Body content`
    const result = analyzePartnerGeocoding(content)
    expect(result.missingCoordinates).toBe(true)
    expect(result.geocodingFailed).toBe(false)
  })

  it('identifies existing coordinates', () => {
    const content = `---
title: Test Partner
region: nsw
coordinates:
  lat: -33.8688
  lng: 151.2093
---
Body content`
    const result = analyzePartnerGeocoding(content)
    expect(result.missingCoordinates).toBe(false)
    expect(result.geocodingFailed).toBe(false)
  })

  it('identifies failed geocoding flag', () => {
    const content = `---
title: Test Partner
region: nsw
geocoding_failed: true
---
Body content`
    const result = analyzePartnerGeocoding(content)
    expect(result.missingCoordinates).toBe(true)
    expect(result.geocodingFailed).toBe(true)
  })

  it('identifies both coordinates and failed flag (edge case)', () => {
    const content = `---
title: Test Partner
region: nsw
geocoding_failed: true
coordinates:
  lat: 0
  lng: 0
---
Body content`
    const result = analyzePartnerGeocoding(content)
    expect(result.missingCoordinates).toBe(false)
    expect(result.geocodingFailed).toBe(true)
  })
})

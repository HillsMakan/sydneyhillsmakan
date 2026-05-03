import { describe, it, expect, vi } from 'vitest'
import { analyzePartnerGeocoding, simplifyAddress, isCoordInRegion, getRegionalCapital, geocode } from './geocoding-utils';

describe('geocode', () => {
  it('returns coordinates on successful API response', async () => {
    const mockResponse = [{ lat: '-33.8688', lon: '151.2093', type: 'street' }];
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(mockResponse)
    });

    const result = await geocode('Sydney', 'nsw');
    expect(result).toEqual({ lat: -33.8688, lng: 151.2093 });
  });

  it('rejects generic matches in strict mode', async () => {
    const mockResponse = [{ lat: '-33.8688', lon: '151.2093', type: 'state', class: 'place' }];
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(mockResponse)
    });

    const result = await geocode('New South Wales', 'nsw', true);
    expect(result).toBeNull();
  });
});

describe('analyzePartnerGeocoding', () => {
  it('identifies missing coordinates', () => {
    const content = `---
title: Test Partner
region: nsw
---
Body content`;
    const result = analyzePartnerGeocoding(content);
    expect(result.missingCoordinates).toBe(true);
    expect(result.geocodingFailed).toBe(false);
  });

  it('identifies existing coordinates', () => {
    const content = `---
title: Test Partner
region: nsw
coordinates:
  lat: -33.8688
  lng: 151.2093
---
Body content`;
    const result = analyzePartnerGeocoding(content);
    expect(result.missingCoordinates).toBe(false);
    expect(result.geocodingFailed).toBe(false);
  });

  it('identifies failed geocoding flag', () => {
    const content = `---
title: Test Partner
region: nsw
geocoding_failed: true
---
Body content`;
    const result = analyzePartnerGeocoding(content);
    expect(result.missingCoordinates).toBe(true);
    expect(result.geocodingFailed).toBe(true);
  });

  it('identifies both coordinates and failed flag (edge case)', () => {
    const content = `---
title: Test Partner
region: nsw
geocoding_failed: true
coordinates:
  lat: 0
  lng: 0
---
Body content`;
    const result = analyzePartnerGeocoding(content);
    expect(result.missingCoordinates).toBe(false);
    expect(result.geocodingFailed).toBe(true);
  });
});

describe('simplifyAddress', () => {
  it('returns an array of simplified addresses', () => {
    const address = 'Shop 1, 123 Main St (Next to Bank), Sydney, NSW 2000';
    const result = simplifyAddress(address);
    // Should include the address without the (Next to Bank) part and without Shop 1
    expect(result).toContain('123 Main St, Sydney, NSW 2000');
    expect(result).toContain('Sydney, NSW 2000');
  });

  it('removes business name prefixes', () => {
    const address = 'Bunnings, 123 Main St, Sydney';
    const result = simplifyAddress(address);
    expect(result).toContain('123 Main St, Sydney');
  });
});

describe('isCoordInRegion', () => {
  it('identifies coordinates in NSW', () => {
    // Sydney is in NSW
    expect(isCoordInRegion(-33.8688, 151.2093, 'nsw')).toBe(true);
  });

  it('identifies coordinates outside NSW', () => {
    // Melbourne is NOT in NSW
    expect(isCoordInRegion(-37.8136, 144.9631, 'nsw')).toBe(false);
  });
});

describe('getRegionalCapital', () => {
  it('returns the capital for nsw', () => {
    expect(getRegionalCapital('nsw')).toBe('Sydney, New South Wales, Australia');
  });
});

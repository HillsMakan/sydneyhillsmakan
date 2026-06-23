/**
 * Region names and their full descriptions.
 */
export const REGION_NAMES: Record<string, string> = {
  act: 'Australian Capital Territory, Australia',
  australia: 'Australia',
  bali: 'Bali, Indonesia',
  indonesia: 'Indonesia',
  japan: 'Japan',
  johor: 'Johor, Malaysia',
  kl: 'Kuala Lumpur, Malaysia',
  kyoto: 'Kyoto, Japan',
  malaysia: 'Malaysia',
  melaka: 'Melaka, Malaysia',
  new_zealand: 'New Zealand',
  nsw: 'New South Wales, Australia',
  penang: 'Penang, Malaysia',
  queensland: 'Queensland, Australia',
  sa: 'South Australia, Australia',
  selangor: 'Selangor, Malaysia',
  singapore: 'Singapore',
  united_kingdom: 'United Kingdom',
  victoria: 'Victoria, Australia',
  wa: 'Western Australia, Australia',
  international: 'International'
}

/**
 * Regional capitals for fallback geocoding.
 */
export const REGIONAL_CAPITALS: Record<string, string> = {
  act: 'Canberra, Australian Capital Territory, Australia',
  australia: 'Canberra, Australia',
  bali: 'Denpasar, Bali, Indonesia',
  indonesia: 'Jakarta, Indonesia',
  japan: 'Tokyo, Japan',
  johor: 'Johor Bahru, Johor, Malaysia',
  kl: 'Kuala Lumpur, Malaysia',
  kyoto: 'Kyoto, Japan',
  malaysia: 'Kuala Lumpur, Malaysia',
  melaka: 'Melaka City, Melaka, Malaysia',
  new_zealand: 'Wellington, New Zealand',
  nsw: 'Sydney, New South Wales, Australia',
  penang: 'George Town, Penang, Malaysia',
  queensland: 'Brisbane, Queensland, Australia',
  sa: 'Adelaide, South Australia, Australia',
  selangor: 'Shah Alam, Selangor, Malaysia',
  singapore: 'Singapore',
  united_kingdom: 'London, United Kingdom',
  victoria: 'Melbourne, Victoria, Australia',
  wa: 'Perth, Western Australia, Australia',
  international: 'Sydney, Australia'
}

/**
 * Rough bounding boxes for regions to validate geocoding results.
 * Format: [minLat, maxLat, minLng, maxLng]
 */
export const REGION_BOUNDS: Record<string, [number, number, number, number]> = {
  nsw: [-37.5, -28, 141, 154],
  victoria: [-39.2, -34, 140.9, 150],
  queensland: [-29.2, -10, 138, 153.6],
  wa: [-35.2, -13.6, 112.9, 129],
  sa: [-38.2, -26, 129, 141.1],
  act: [-36, -35, 148.7, 149.4],
  singapore: [1.1, 1.5, 103.6, 104.1],
  malaysia: [0.8, 7.4, 99.6, 119.3],
  kl: [3, 3.3, 101.5, 101.8],
  selangor: [2.5, 3.9, 100.8, 101.9],
  penang: [5.1, 5.6, 100.1, 100.6],
  johor: [1.2, 2.8, 102.5, 104.4],
  melaka: [2, 2.5, 102, 102.6],
  bali: [-8.9, -8, 114.4, 115.8],
  indonesia: [-11.1, 6.1, 95, 141.1],
  japan: [30, 45.6, 128.2, 149.3],
  kyoto: [34.7, 35.8, 134.8, 136],
  new_zealand: [-47.5, -34, 166, 179],
  united_kingdom: [49.8, 60.9, -8.7, 1.8],
  international: [-90, 90, -180, 180]
}

/**
 * Analyzes partner Markdown content to determine its geocoding status.
 */
export function analyzePartnerGeocoding(content: string) {
  const fmMatch = content.match(/^---\n([\s\S]*?)\n---/)
  if (!fmMatch) {
    return {
      missingCoordinates: true,
      geocodingFailed: false
    }
  }

  const fm = fmMatch[1]
  const isMissingCoordinates = !fm.includes('coordinates:')
  const geocodingFailed = fm.includes('geocoding_failed: true')

  return {
    missingCoordinates: isMissingCoordinates,
    geocodingFailed
  }
}

/**
 * Simplifies an address iteratively for geocoding attempts.
 */
export function simplifyAddress(address: string): string[] {
  if (!address) return []

  const results: string[] = []

  // 1. Original cleaned address (remove brackets and trailing commas)
  let current = address
    .replaceAll(/\([^)]*\)/g, '')
    .replaceAll(/\s+/g, ' ')
    .trim()
  current = current
    .replaceAll(/\s*,\s*/g, ', ')
    .replace(/[\\,]+$/, '')
    .trim()
  results.push(current)

  // 2. Remove business prefixes (Shop, Unit, Level, etc.)
  const noPrefix = current.replace(/^(Shop|Unit|Level|Suite|SShop|Pork|Ribs)\s+[^,]+,\s*/i, '')
  if (noPrefix !== current) {
    results.push(noPrefix)
  }

  // 3. Keep only the part after the first comma (if it looks like a street name)
  const parts = noPrefix.split(',').map((p) => p.trim())
  if (parts.length > 2) {
    results.push(parts.slice(1).join(', '))
  }

  return [...new Set(results)] // Unique results
}

/**
 * Validates if coordinates are within a region's rough bounding box.
 */
export function isCoordInRegion(lat: number, lng: number, regionId: string): boolean {
  const bounds = REGION_BOUNDS[regionId]
  if (!bounds) return true // Default to true if bounds unknown

  const [minLat, maxLat, minLng, maxLng] = bounds
  return lat >= minLat && lat <= maxLat && lng >= minLng && lng <= maxLng
}

/**
 * Returns the capital city for a given region.
 */
export function getRegionalCapital(regionId: string): string {
  return REGIONAL_CAPITALS[regionId] || REGION_NAMES[regionId] || 'Australia'
}

/**
 * Map regionId to country code for Nominatim.
 */
export const COUNTRY_CODES: Record<string, string> = {
  nsw: 'au',
  victoria: 'au',
  queensland: 'au',
  wa: 'au',
  sa: 'au',
  act: 'au',
  australia: 'au',
  singapore: 'sg',
  kl: 'my',
  selangor: 'my',
  penang: 'my',
  johor: 'my',
  malaysia: 'my',
  melaka: 'my',
  bali: 'id',
  indonesia: 'id',
  kyoto: 'jp',
  japan: 'jp',
  new_zealand: 'nz',
  united_kingdom: 'gb'
}

/**
 * Geocodes a query using Nominatim.
 */
export async function geocode(query: string, regionId: string, strict = false) {
  if (!query || query.length < 3) return

  const cc = COUNTRY_CODES[regionId] || ''
  const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}${cc ? `&countrycodes=${cc}` : ''}&addressdetails=1`

  try {
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'SydneyHillsMakanGeocoder/2.0 (hmg@sydneyhillsmakan.com)'
      }
    })

    if (!response.ok) return

    const data = await response.json()
    if (data && data.length > 0) {
      const bestMatch = data[0]

      if (strict) {
        const isGeneric =
          ['country', 'state', 'province', 'region', 'administrative'].includes(bestMatch.type) ||
          ['boundary', 'place'].includes(bestMatch.class)
        if (isGeneric) return
      }

      return {
        lat: Number.parseFloat(bestMatch.lat),
        lng: Number.parseFloat(bestMatch.lon)
      }
    }
  } catch (error) {
    console.error(`Error geocoding ${query}:`, error)
  }
  return
}

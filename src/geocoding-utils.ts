/**
 * Analyzes partner Markdown content to determine its geocoding status.
 * @param content The raw Markdown content of a partner file.
 * @returns An object containing geocoding status flags.
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
  const missingCoordinates = !fm.includes('coordinates:')
  const geocodingFailed = fm.includes('geocoding_failed: true')

  return {
    missingCoordinates,
    geocodingFailed
  }
}

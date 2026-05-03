import fs from 'fs';
import path from 'path';
import { pathToFileURL } from 'url';
import * as geocodingUtilsModule from '../geocoding-utils.ts';

type GeocodingUtilsExports = {
  REGION_NAMES: Record<string, string>;
  geocode: (query: string, regionId: string, strict?: boolean) => Promise<{ lat: number; lng: number } | undefined>;
  simplifyAddress: (address: string) => string[];
  isCoordInRegion: (lat: number, lng: number, regionId: string) => boolean;
  getRegionalCapital: (regionId: string) => string;
};

const geocodingUtils = (
  'REGION_NAMES' in geocodingUtilsModule
    ? geocodingUtilsModule
    : (geocodingUtilsModule as { default?: GeocodingUtilsExports }).default
) as GeocodingUtilsExports;

const { REGION_NAMES, geocode, simplifyAddress, isCoordInRegion, getRegionalCapital } = geocodingUtils;

const PARTNER_COLLECTION_BASE = './src/content/partner';
const COORDINATES_BLOCK_REGEX = /\ncoordinates:\s*\n\s*lat:\s*-?\d+(?:\.\d+)?\s*\n\s*lng:\s*-?\d+(?:\.\d+)?/m;

type RunOptions = {
  limit: number;
  refreshAll: boolean;
};

function parseBooleanFlag(value: string | undefined): boolean {
  if (!value) return false;
  return value === '1' || /^true$/i.test(value);
}

function getFlagValue(args: string[], flagName: string): string | undefined {
  const prefixed = `${flagName}=`;
  const direct = args.find((arg) => arg.startsWith(prefixed));
  if (direct) {
    return direct.slice(prefixed.length);
  }

  const index = args.findIndex((arg) => arg === flagName);
  if (index !== -1 && index + 1 < args.length) {
    return args[index + 1];
  }

  return;
}

export function parseRunOptions(args = process.argv.slice(2), env = process.env): RunOptions {
  const limitFlag = getFlagValue(args, '--limit');
  const limitValue = limitFlag ?? env.LIMIT;
  const parsedLimit = limitValue ? Number.parseInt(limitValue, 10) : -1;

  const refreshAll =
    args.includes('--refresh-all') ||
    parseBooleanFlag(getFlagValue(args, '--refresh-all')) ||
    parseBooleanFlag(env.REFRESH_ALL);

  return {
    limit: Number.isNaN(parsedLimit) ? -1 : parsedLimit,
    refreshAll
  };
}

function readField(frontmatter: string, fieldName: string): string | null {
  const escapedField = fieldName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp(`(?:^|[\\n\\r])${escapedField}:\\s*(.*)`);
  const match = frontmatter.match(regex);
  if (!match) return null;

  return match[1]
    .trim()
    .replace(/^['"]/, '')
    .replace(/['"]$/, '')
    .trim();
}

export function extractCoordinatesFromFrontmatter(frontmatter: string) {
  if (!frontmatter.includes('coordinates:')) return null;

  const latMatch = frontmatter.match(/(?:^|\n)\s*lat:\s*(-?\d+(?:\.\d+)?)/);
  const lngMatch = frontmatter.match(/(?:^|\n)\s*lng:\s*(-?\d+(?:\.\d+)?)/);
  if (!latMatch || !lngMatch) return null;

  const lat = Number.parseFloat(latMatch[1]);
  const lng = Number.parseFloat(lngMatch[1]);
  if (Number.isNaN(lat) || Number.isNaN(lng)) return null;

  return { lat, lng };
}

export function shouldGeocodeFrontmatter(frontmatter: string, regionId: string, refreshAll: boolean): boolean {
  if (refreshAll) return true;

  if (!frontmatter.includes('coordinates:')) return true;

  const coords = extractCoordinatesFromFrontmatter(frontmatter);
  if (!coords) return true;

  return !isCoordInRegion(coords.lat, coords.lng, regionId);
}

function removeCoordinatesBlock(frontmatter: string): string {
  return frontmatter.replace(COORDINATES_BLOCK_REGEX, '');
}

function upsertCoordinatesBlock(frontmatter: string, lat: number, lng: number): string {
  const coordinatesBlock = `\ncoordinates:\n  lat: ${lat}\n  lng: ${lng}`;
  if (frontmatter.includes('coordinates:')) {
    if (COORDINATES_BLOCK_REGEX.test(frontmatter)) {
      return frontmatter.replace(COORDINATES_BLOCK_REGEX, coordinatesBlock);
    }

    return `${removeCoordinatesBlock(frontmatter)}${coordinatesBlock}`;
  }

  return `${frontmatter}${coordinatesBlock}`;
}

async function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function normalizeToPartnerRelativePath(filePath: string): string {
  const normalized = filePath.replaceAll('\\', '/');
  const rootPrefixed = `${PARTNER_COLLECTION_BASE.replace(/^\.\//, '')}/`;

  if (normalized.startsWith(rootPrefixed)) {
    return normalized.slice(rootPrefixed.length);
  }

  if (normalized.startsWith(`${PARTNER_COLLECTION_BASE}/`)) {
    return normalized.slice(PARTNER_COLLECTION_BASE.length + 1);
  }

  return normalized;
}

function getPartnerCollectionFiles(): string[] {
  if (!fs.existsSync(PARTNER_COLLECTION_BASE)) {
    throw new Error(`Partner collection directory not found: ${PARTNER_COLLECTION_BASE}`);
  }

  const partnerFiles = fs
    .readdirSync(PARTNER_COLLECTION_BASE, { withFileTypes: true })
    .filter((entry) => entry.isFile() && entry.name.endsWith('.md'))
    .map((entry) => normalizeToPartnerRelativePath(entry.name))
    .sort((a, b) => a.localeCompare(b));

  if (partnerFiles.length === 0) {
    throw new Error('No partner markdown files found in partner collection directory.');
  }

  return partnerFiles;
}

export async function run() {
  const files = getPartnerCollectionFiles();
  let updatedCount = 0;
  const options = parseRunOptions();

  for (const file of files) {
    if (options.limit !== -1 && updatedCount >= options.limit) break;

    const filePath = path.join(PARTNER_COLLECTION_BASE, file);
    let content = fs.readFileSync(filePath, 'utf8');
    const fmMatch = content.match(/^---\n([\s\S]*?)\n---/);
    if (!fmMatch) continue;

    let fm = fmMatch[1];
    let body = content.slice(fmMatch[0].length);
    let changed = false;

    // Extract fields from frontmatter for geocoding degradation flow.
    const title = readField(fm, 'title');
    const name = readField(fm, 'name');
    const primaryName = title || name;
    const regionId = readField(fm, 'region');
    const regionName = regionId ? (REGION_NAMES[regionId] || '') : '';

    const address = readField(fm, 'address');

    if (!regionId || (!address && !primaryName)) continue;

    const needsGeocoding = shouldGeocodeFrontmatter(fm, regionId, options.refreshAll);
    if (!needsGeocoding) {
        continue;
    }

    if (fm.includes('coordinates:')) {
      fm = removeCoordinatesBlock(fm);
      changed = true;
    }

    let coords = null;

    // 1. Try Address (Iterative Simplification)
    if (address) {
        const simplifiedAddresses = simplifyAddress(address);
        for (const addr of simplifiedAddresses) {
            if (addr.length < 5) continue;
            await delay(1200);
            coords = await geocode(addr, regionId, true);
            if (coords && isCoordInRegion(coords.lat, coords.lng, regionId)) break;
            coords = null; // Reset if outside region
        }
    }

    // 2. Fallback to Title + Region
    if (!coords && primaryName) {
      const cleanTitle = primaryName.replace(/[^\x00-\x7F]/g, '').replace(/^\d+[:\.]\d+\s*/, '').trim();
      const queries = [
        `${primaryName}, ${regionName}`,
        `${cleanTitle}, ${regionName}`,
        `${cleanTitle}, Australia`,
        cleanTitle
      ];

        for (const query of queries) {
            const finalQuery = query.trim().replace(/,\s*$/, '');
            if (finalQuery.length < 3) continue;

            await delay(1200);
            coords = await geocode(finalQuery, regionId, true);
            if (coords && isCoordInRegion(coords.lat, coords.lng, regionId)) break;
            coords = null;
        }
    }

    // 3. Last Resort: Regional Capital (non-strict query + strict region validation)
    if (!coords) {
        const capital = getRegionalCapital(regionId);
        console.log(`Last resort for ${file}: ${capital}`);
        await delay(1200);
      const fallbackCoords = await geocode(capital, regionId, false);
        if (fallbackCoords && isCoordInRegion(fallbackCoords.lat, fallbackCoords.lng, regionId)) {
          coords = fallbackCoords;
        }
    }

    if (coords) {
      fm = fm.replace(/\n\s*geocoding_failed:\s*true/g, '');
      fm = upsertCoordinatesBlock(fm, coords.lat, coords.lng);
      changed = true;
      console.log(`Updated ${file} with coordinates: ${coords.lat}, ${coords.lng}`);
    }

    if (changed) {
      fs.writeFileSync(filePath, `---\n${fm}\n---${body}`);
      updatedCount++;
    }
  }

  console.log(`Finished. Updated ${updatedCount} files.`);
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  run().catch((error) => {
    console.error('Geocoding run failed:', error);
    process.exitCode = 1;
  });
}

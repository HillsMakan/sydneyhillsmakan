import fs from 'fs';
import path from 'path';

const PARTNER_DIR = './src/content/partner';
const DATA_DIR = './src/data';
const CACHE_FILE = path.join(DATA_DIR, 'geo-cache.json');

async function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function geocode(address) {
  // Clean address for fetching: remove parenthetical notes, specific unit/shop info, and trailing punctuation
  let cleanAddress = address.split('(')[0].trim();
  cleanAddress = cleanAddress.replace(/^(Shop|Unit|Level|Suite|SShop)\s+[^,]+,\s*/i, '');
  cleanAddress = cleanAddress.replace(/[\\,]+$/, '').trim();

  // Filter out vague addresses
  if (!cleanAddress || cleanAddress.length < 5 || /sydney metro area/i.test(cleanAddress)) {
    console.log(`Skipping vague address: ${address}`);
    return null;
  }

  const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(cleanAddress)}`;
  console.log(`Geocoding: ${cleanAddress}`);
  try {
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'SydneyHillsMakanGeocoder/1.0 (hmg@sydneyhillsmakan.com)'
      }
    });
    if (!response.ok) {
        console.error(`HTTP Error: ${response.status}`);
        return null;
    }
    const data = await response.json();
    if (data && data.length > 0) {
      return {
        lat: parseFloat(data[0].lat),
        lng: parseFloat(data[0].lon)
      };
    }
  } catch (error) {
    console.error(`Error geocoding ${address}:`, error);
  }
  return null;
}

async function run() {
  let cache = {};
  if (fs.existsSync(CACHE_FILE)) {
    console.log('Found existing cache file. Using it for migration...');
    try {
        cache = JSON.parse(fs.readFileSync(CACHE_FILE, 'utf8'));
    } catch (e) {
        console.error('Error reading cache file:', e);
    }
  }

  const files = fs.readdirSync(PARTNER_DIR).filter(f => f.endsWith('.md'));
  let updatedCount = 0;
  const LIMIT = process.env.LIMIT ? parseInt(process.env.LIMIT) : -1;

  for (const file of files) {
    if (LIMIT !== -1 && updatedCount >= LIMIT) break;

    const filePath = path.join(PARTNER_DIR, file);
    let content = fs.readFileSync(filePath, 'utf8');
    const fmMatch = content.match(/^---\n([\s\S]*?)\n---/);
    if (!fmMatch) continue;

    let fm = fmMatch[1];
    let body = content.slice(fmMatch[0].length);
    let changed = false;

    // Skip if coordinates already exist OR if specifically marked as failed
    if (fm.includes('coordinates:') || fm.includes('geocoding_failed: true')) {
        continue;
    }

    // 1. Extract or identify address
    let address = null;
    const addrFM = fm.match(/address:\s*"(.*)"/) || fm.match(/address:\s*(.*)/);
    if (addrFM) {
      address = addrFM[1].trim().replace(/^"/, '').replace(/"$/, '');
    } else {
      // Try to extract from body if not in FM
      const locMatch = body.match(/\*\*Location\s*:\s*\*\*\s*(.*)/i) || body.match(/Location\s*:\s*(.*)/i);
      if (locMatch) {
        address = locMatch[1].trim().replace(/\\$/, '').replace(/^ /, '');
        if (address && address.length > 5 && !/Location\s*:\s*\*\*/.test(address)) {
          fm += `\naddress: "${address.replace(/"/g, '\\"')}"`;
          changed = true;
        } else {
          address = null;
        }
      }
    }

    if (!address) continue;

    // 2. Try to get coordinates (Check cache first for migration, then API)
    let coords = cache[address];
    let source = 'cache';

    if (coords === undefined) {
      await delay(1200); // 1.2s delay for Nominatim
      coords = await geocode(address);
      source = 'API';
    }

    if (coords) {
      fm += `\ncoordinates:\n  lat: ${coords.lat}\n  lng: ${coords.lng}`;
      changed = true;
      console.log(`Updated ${file} with coordinates from ${source}`);
    } else {
      // Mark as failed to avoid retrying every build
      fm += `\ngeocoding_failed: true`;
      changed = true;
      console.log(`Marked ${file} as geocoding_failed`);
    }

    if (changed) {
      fs.writeFileSync(filePath, `---\n${fm}\n---${body}`);
      updatedCount++;
    }
  }

  console.log(`Finished. Updated ${updatedCount} files.`);
}

run();

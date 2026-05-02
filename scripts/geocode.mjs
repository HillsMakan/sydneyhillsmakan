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
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }

  let cache = {};
  if (fs.existsSync(CACHE_FILE)) {
    cache = JSON.parse(fs.readFileSync(CACHE_FILE, 'utf8'));
  }

  const files = fs.readdirSync(PARTNER_DIR).filter(f => f.endsWith('.md'));
  let updatedCount = 0;
  const LIMIT = process.env.LIMIT ? parseInt(process.env.LIMIT) : 5;

  for (const file of files) {
    if (updatedCount >= LIMIT && LIMIT !== -1) break;

    const filePath = path.join(PARTNER_DIR, file);
    let content = fs.readFileSync(filePath, 'utf8');
    const fmMatch = content.match(/^---\n([\s\S]*?)\n---/);
    if (!fmMatch) continue;

    let fm = fmMatch[1];
    let body = content.slice(fmMatch[0].length);
    let changed = false;

    // 1. Extract address from body if missing from FM
    let address = null;
    const addrFM = fm.match(/address:\s*"(.*)"/) || fm.match(/address:\s*(.*)/);
    if (addrFM) {
      address = addrFM[1].trim().replace(/^"/, '').replace(/"$/, '');
    } else {
      const locMatch = body.match(/\*\*Location\s*:\s*\*\*\s*(.*)/i) || body.match(/Location\s*:\s*(.*)/i);
      if (locMatch) {
        address = locMatch[1].trim().replace(/\\$/, '').replace(/^ /, '');
        if (address && address.length > 5) {
          // Check if it's not a generic placeholder
          if (!/Location\s*:\s*\*\*/.test(address)) {
            fm += `\naddress: "${address.replace(/"/g, '\\"')}"`;
            changed = true;
          } else {
              address = null;
          }
        }
      }
    }

    // 2. Geocode if address exists but coordinates missing
    if (address && !fm.includes('coordinates:')) {
      let coords = cache[address];
      if (!coords) {
        await delay(1200); // 1.2s delay for Nominatim
        coords = await geocode(address);
        // Always update cache (even if coords is null)
        cache[address] = coords;
        fs.writeFileSync(CACHE_FILE, JSON.stringify(cache, null, 2));
      }

      if (coords) {
        fm += `\ncoordinates:\n  lat: ${coords.lat}\n  lng: ${coords.lng}`;
        changed = true;
      }
    }

    if (changed) {
      fs.writeFileSync(filePath, `---\n${fm}\n---${body}`);
      updatedCount++;
      console.log(`Updated: ${file}`);
    }
  }

  console.log(`Finished. Processed ${updatedCount} files.`);
}

run();

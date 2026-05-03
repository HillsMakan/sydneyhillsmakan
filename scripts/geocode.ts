import fs from 'fs';
import path from 'path';
import { 
  REGION_NAMES, 
  geocode, 
  simplifyAddress, 
  isCoordInRegion, 
  getRegionalCapital 
} from '../src/geocoding-utils';

const PARTNER_DIR = './src/content/partner';

async function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function run() {
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

    // Extract fields using robust regex
    const titleMatch = fm.match(/[\n\r]title:\s*(.*)/) || fm.match(/^title:\s*(.*)/);
    const title = titleMatch ? titleMatch[1].trim().replace(/^"/, '').replace(/"$/, '') : null;
    
    const regionMatch = fm.match(/[\n\r]region:\s*([^\s\n\r]+)/) || fm.match(/^region:\s*([^\s\n\r]+)/);
    const regionId = regionMatch ? regionMatch[1].trim() : null;
    const regionName = regionId ? (REGION_NAMES[regionId] || '') : '';

    const addrMatch = fm.match(/[\n\r]address:\s*(.*)/) || fm.match(/^address:\s*(.*)/);
    const address = addrMatch ? addrMatch[1].trim().replace(/^"/, '').replace(/"$/, '') : null;

    if (!title || !regionId) continue;

    // Validation: Check if we need to geocode
    let needsGeocoding = !fm.includes('coordinates:');
    
    if (!needsGeocoding) {
        const lngMatch = fm.match(/lng:\s*(-?\d+\.\d+)/);
        const lng = lngMatch ? parseFloat(lngMatch[1]) : 0;
        const latMatch = fm.match(/lat:\s*(-?\d+\.\d+)/);
        const lat = latMatch ? parseFloat(latMatch[1]) : 0;

        // Re-geocode if coordinates are obviously wrong (e.g., in the Americas for AU partners)
        if (!isCoordInRegion(lat, lng, regionId)) {
            console.log(`Re-geocoding ${file} (coordinates outside region bounds: ${lat}, ${lng})`);
            needsGeocoding = true;
            fm = fm.replace(/\ncoordinates:[\s\S]*?lng: -?\d+\.\d+/, '');
            changed = true;
        }
    }

    if (!needsGeocoding && !fm.includes('geocoding_failed: true')) {
        continue;
    }

    let coords = null;

    // 1. Try Address (Iterative Simplification)
    if (address && !/sydney metro area/i.test(address)) {
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
    if (!coords) {
        const cleanTitle = title.replace(/[^\x00-\x7F]/g, '').replace(/^\d+[:\.]\d+\s*/, '').trim();
        const queries = [
            `${title}, ${regionName}`,
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

    // 3. Last Resort: Regional Capital (Not strict)
    if (!coords) {
        const capital = getRegionalCapital(regionId);
        console.log(`Last resort for ${file}: ${capital}`);
        await delay(1200);
        coords = await geocode(capital, regionId, false);
    }

    if (coords) {
      fm = fm.replace(/\ngeocoding_failed: true/g, '');
      const coordsStr = `\ncoordinates:\n  lat: ${coords.lat}\n  lng: ${coords.lng}`;
      if (fm.includes('coordinates:')) {
          fm = fm.replace(/\ncoordinates:[\s\S]*?lng: -?\d+\.\d+/, coordsStr);
      } else {
          fm += coordsStr;
      }
      changed = true;
      console.log(`Updated ${file} with coordinates: ${coords.lat}, ${coords.lng}`);
    } else {
      if (!fm.includes('geocoding_failed: true')) {
          fm += `\ngeocoding_failed: true`;
          changed = true;
          console.log(`Marked ${file} as geocoding_failed`);
      }
    }

    if (changed) {
      fs.writeFileSync(filePath, `---\n${fm}\n---${body}`);
      updatedCount++;
    }
  }

  console.log(`Finished. Updated ${updatedCount} files.`);
}

run();

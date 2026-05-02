import fs from 'fs';
import path from 'path';

const PARTNER_DIR = './src/content/partner';

const REGION_NAMES = {
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
};

async function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function geocode(query) {
  if (!query || query.length < 3) return null;

  const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}`;
  console.log(`Geocoding: ${query}`);
  try {
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'SydneyHillsMakanGeocoder/1.1 (hmg@sydneyhillsmakan.com)'
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
    console.error(`Error geocoding ${query}:`, error);
  }
  return null;
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

    // Skip if coordinates already exist
    if (fm.includes('coordinates:')) {
        continue;
    }

    // Extract fields
    const titleMatch = fm.match(/title:\s*"(.*)"/) || fm.match(/title:\s*(.*)/);
    const title = titleMatch ? titleMatch[1].trim().replace(/^"/, '').replace(/"$/, '') : null;
    
    const regionMatch = fm.match(/region:\s*(.*)/);
    const regionId = regionMatch ? regionMatch[1].trim() : null;
    const regionName = REGION_NAMES[regionId] || '';

    const addrMatch = fm.match(/address:\s*"(.*)"/) || fm.match(/address:\s*(.*)/);
    const address = addrMatch ? addrMatch[1].trim().replace(/^"/, '').replace(/"$/, '') : null;

    if (!title) continue;

    let coords = null;

    // 1. Try Address First
    if (address && !/sydney metro area/i.test(address)) {
        let cleanAddress = address.split('(')[0].trim();
        cleanAddress = cleanAddress.replace(/^(Shop|Unit|Level|Suite|SShop)\s+[^,]+,\s*/i, '');
        cleanAddress = cleanAddress.replace(/[\\,]+$/, '').trim();
        
        if (cleanAddress.length > 5) {
            await delay(1200);
            coords = await geocode(cleanAddress);
        }
    }

    // 2. Fallback to Title + Region
    if (!coords) {
        // Strip non-latin characters from title for geocoding query
        const cleanTitle = title.replace(/[^\x00-\x7F]/g, '').trim();
        const queries = [
            `${cleanTitle}, ${regionName}`,
            `${cleanTitle}, Australia`,
            cleanTitle
        ];

        for (const query of queries) {
            const finalQuery = query.trim().replace(/,\s*$/, '');
            if (finalQuery.length < 3) continue;

            console.log(`Fallback for ${file}: ${finalQuery}`);
            await delay(1200);
            coords = await geocode(finalQuery);
            if (coords) break;
        }
    }

    if (coords) {
      // Remove geocoding_failed if it exists
      fm = fm.replace(/\ngeocoding_failed: true/g, '');
      fm += `\ncoordinates:\n  lat: ${coords.lat}\n  lng: ${coords.lng}`;
      changed = true;
      console.log(`Updated ${file} with coordinates`);
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

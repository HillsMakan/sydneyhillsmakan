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

async function geocode(query, regionId) {
  if (!query || query.length < 3) return null;

  // Map regionId to country code for Nominatim
  const countryCodes = {
    nsw: 'au', victoria: 'au', queensland: 'au', wa: 'au', sa: 'au', act: 'au', australia: 'au',
    singapore: 'sg',
    kl: 'my', selangor: 'my', penang: 'my', johor: 'my', malaysia: 'my', melaka: 'my',
    bali: 'id', indonesia: 'id',
    kyoto: 'jp', japan: 'jp',
    new_zealand: 'nz',
    united_kingdom: 'gb'
  };
  const cc = countryCodes[regionId] || '';

  const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}${cc ? `&countrycodes=${cc}` : ''}`;
  console.log(`Geocoding: ${query} (cc: ${cc})`);
  try {
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'SydneyHillsMakanGeocoder/1.2 (hmg@sydneyhillsmakan.com)'
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

    // Check if coordinates already exist
    if (fm.includes('coordinates:')) {
        // Validation: Re-geocode if coordinates are in the Americas/Europe (wrong longitude for our project regions)
        // Regions are AU, SG, MY, ID, NZ, JP (all Eastern) and GB (UK).
        const lngMatch = fm.match(/lng:\s*(-?\d+\.\d+)/);
        const lng = lngMatch ? parseFloat(lngMatch[1]) : 0;
        const regionMatch = fm.match(/region:\s*(.*)/);
        const regionId = regionMatch ? regionMatch[1].trim() : null;

        if (lng < 0 && regionId !== 'united_kingdom') {
            console.log(`Re-geocoding ${file} (detected Western longitude: ${lng} for region ${regionId})`);
            fm = fm.replace(/\ncoordinates:[\s\S]*?lng: -?\d+\.\d+/, '');
            changed = true;
        } else {
            continue;
        }
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

    // 1. Try Address First (if strict enough)
    if (address && !/sydney metro area/i.test(address)) {
        let cleanAddress = address.split('(')[0].trim();
        cleanAddress = cleanAddress.replace(/^(Shop|Unit|Level|Suite|SShop)\s+[^,]+,\s*/i, '');
        cleanAddress = cleanAddress.replace(/[\\,]+$/, '').trim();
        
        if (cleanAddress.length > 5) {
            await delay(1200);
            coords = await geocode(cleanAddress, regionId);
        }
    }

    // 2. Fallback to Title + Region
    if (!coords) {
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
            coords = await geocode(finalQuery, regionId);
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

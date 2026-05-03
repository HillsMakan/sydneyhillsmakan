import fs from 'fs';
import path from 'path';

const PARTNER_DIR = './src/content/partner';

/**
 * Analyzes partner Markdown content to determine its geocoding status.
 */
function analyzePartnerGeocoding(content) {
  const fmMatch = content.match(/^---\n([\s\S]*?)\n---/);
  if (!fmMatch) {
    return {
      missingCoordinates: true,
      geocodingFailed: false
    };
  }

  const fm = fmMatch[1];
  const missingCoordinates = !fm.includes('coordinates:');
  const geocodingFailed = fm.includes('geocoding_failed: true');

  return {
    missingCoordinates,
    geocodingFailed
  };
}

function run() {
  if (!fs.existsSync(PARTNER_DIR)) {
    console.error(`Directory not found: ${PARTNER_DIR}`);
    process.exit(1);
  }

  const files = fs.readdirSync(PARTNER_DIR).filter(f => f.endsWith('.md'));
  const missing = [];
  const failed = [];
  let total = 0;

  for (const file of files) {
    total++;
    const filePath = path.join(PARTNER_DIR, file);
    const content = fs.readFileSync(filePath, 'utf8');
    const { missingCoordinates, geocodingFailed } = analyzePartnerGeocoding(content);

    if (missingCoordinates) {
      missing.push(file);
    }
    if (geocodingFailed) {
      failed.push(file);
    }
  }

  console.log(`\nGeocoding Status Report`);
  console.log(`=======================`);
  console.log(`Total Partners: ${total}`);
  console.log(`Missing Coordinates: ${missing.length}`);
  console.log(`Geocoding Failed Flag: ${failed.length}`);

  if (missing.length > 0) {
    console.log(`\nPartners Missing Coordinates:`);
    missing.forEach(f => console.log(`- ${f}`));
  }

  if (failed.length > 0) {
    console.log(`\nPartners with Geocoding Failed Flag:`);
    failed.forEach(f => console.log(`- ${f}`));
  }
}

run();

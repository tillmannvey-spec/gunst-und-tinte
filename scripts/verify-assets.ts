/**
 * Asset Verification Script
 * Verifies that all assets are properly organized and accessible
 */

import fs from 'fs';
import path from 'path';
import * as assets from '../src/lib/assets';

const publicDir = path.join(process.cwd(), 'public');

interface VerificationResult {
  total: number;
  valid: number;
  invalid: string[];
}

function verifyAssets(): VerificationResult {
  const result: VerificationResult = {
    total: 0,
    valid: 0,
    invalid: [],
  };

  // Get all exported asset constants
  const allAssets = Object.entries(assets)
    .filter(([key]) => key.startsWith('LOGO_') || key.startsWith('BG_') ||
                       key.startsWith('HERO_') || key.startsWith('THERESA_') ||
                       key.startsWith('GRAPHIC_') || key.startsWith('ICON_'))
    .map(([key, value]) => ({ key, path: value as string }));

  result.total = allAssets.length;

  for (const asset of allAssets) {
    const fullPath = path.join(publicDir, asset.path);
    if (fs.existsSync(fullPath)) {
      result.valid++;
      console.log(`✓ ${asset.key}: ${asset.path}`);
    } else {
      result.invalid.push(asset.key);
      console.log(`✗ ${asset.key}: ${asset.path} (NOT FOUND)`);
    }
  }

  return result;
}

console.log('=== Asset Verification ===\n');
const result = verifyAssets();

console.log('\n=== Summary ===');
console.log(`Total assets: ${result.total}`);
console.log(`Valid assets: ${result.valid}`);
console.log(`Invalid assets: ${result.invalid.length}`);

if (result.invalid.length > 0) {
  console.log('\nMissing assets:');
  result.invalid.forEach(key => console.log(`  - ${key}`));
  process.exit(1);
} else {
  console.log('\n✓ All assets verified successfully!');
  process.exit(0);
}

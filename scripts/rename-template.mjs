#!/usr/bin/env node

import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const newName = process.argv[2];

if (!newName) {
  console.error('Usage: node scripts/rename-template.mjs <ProjectName>');
  process.exit(1);
}

const slug = newName
  .replace(/([a-z])([A-Z])/g, '$1-$2')
  .replace(/[\s_]+/g, '-')
  .toLowerCase();

const scheme = newName.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
const packageName = slug.replace(/-/g, '');
const root = join(import.meta.dirname, '..');

const packageJsonPath = join(root, 'package.json');
const appConfigPath = join(root, 'app.config.ts');

const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf8'));
packageJson.name = packageName;
writeFileSync(packageJsonPath, `${JSON.stringify(packageJson, null, 2)}\n`);

let appConfig = readFileSync(appConfigPath, 'utf8');
appConfig = appConfig
  .replace(/name: '[^']+'/, `name: '${newName}'`)
  .replace(/slug: '[^']+'/, `slug: '${slug}'`)
  .replace(/scheme: '[^']+'/, `scheme: '${scheme}'`)
  .replace(/bundleIdentifier: '[^']+'/, `bundleIdentifier: 'com.devid.${packageName}'`)
  .replace(/package: '[^']+'/, `package: 'com.devid.${packageName}'`);

writeFileSync(appConfigPath, appConfig);

console.log(`Template renommé en "${newName}"`);
console.log(`- package.json name: ${packageName}`);
console.log(`- slug: ${slug}`);
console.log(`- scheme: ${scheme}`);
console.log('\nPensez aussi à mettre à jour :');
console.log('- Les icônes dans assets/');
console.log('- Les couleurs de marque dans global.css et tailwind.config.js');
console.log('- Le fichier .env depuis .env.example');

import sharp from 'sharp';
import { mkdir, copyFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const concept = path.join(root, 'conceptart');
const out = path.join(root, 'public', 'images');

await mkdir(out, { recursive: true });

const jobs = [
  {
    src: 'dustyart-scene1.png',
    dest: 'hero.webp',
    width: 1400,
    quality: 82,
  },
  {
    src: 'dusty-game-icons-theme.png',
    dest: 'project-mobile.webp',
    width: 800,
    quality: 80,
  },
  {
    src: 'dusty pieces.png',
    dest: 'project-tcg.webp',
    extract: { left: 920, top: 420, width: 560, height: 520 },
    width: 600,
    quality: 82,
  },
  {
    src: 'dusty_reactor_concept_art.png',
    dest: 'project-backpack.webp',
    extract: { left: 520, top: 560, width: 420, height: 380 },
    width: 500,
    quality: 82,
  },
  {
    src: 'dusty-scene2.png',
    dest: 'approach.webp',
    extract: { left: 0, top: 512, width: 512, height: 512 },
    width: 600,
    quality: 82,
  },
  {
    src: 'dusty pieces.png',
    dest: 'og-image.webp',
    extract: { left: 880, top: 60, width: 620, height: 480 },
    width: 1200,
    quality: 85,
  },
  {
    src: 'dusty pieces.png',
    dest: 'logo-mark.webp',
    extract: { left: 60, top: 70, width: 320, height: 300 },
    width: 160,
    quality: 85,
  },
];

for (const job of jobs) {
  const input = path.join(concept, job.src);
  let pipeline = sharp(input);

  if (job.extract) {
    pipeline = pipeline.extract(job.extract);
  }

  await pipeline
    .resize({ width: job.width, withoutEnlargement: true })
    .webp({ quality: job.quality })
    .toFile(path.join(out, job.dest));

  console.log(`✓ ${job.dest}`);
}

await sharp(path.join(concept, 'dusty pieces.png'))
  .extract({ left: 60, top: 70, width: 320, height: 300 })
  .resize(32, 32)
  .png()
  .toFile(path.join(root, 'public', 'favicon.png'));

console.log('✓ favicon.png');

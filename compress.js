const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDirs = [
  'img/cgi',
  'img/novice',
  'img/vibe wire'
];
const outputDir = 'public/projects';

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function processImages() {
  for (const dir of inputDirs) {
    if (!fs.existsSync(dir)) continue;
    const files = fs.readdirSync(dir);
    for (const file of files) {
      if (file.endsWith('.png') || file.endsWith('.jpg') || file.endsWith('.jpeg')) {
        const inputPath = path.join(dir, file);
        const outputPath = path.join(outputDir, `${path.basename(dir).replace(' ', '_')}_${file.replace(/ /g, '_')}.webp`);
        console.log(`Processing ${inputPath} -> ${outputPath}`);
        await sharp(inputPath)
          .resize(800)
          .webp({ quality: 80 })
          .toFile(outputPath);
      }
    }
  }
}

processImages().then(() => console.log('Done')).catch(console.error);

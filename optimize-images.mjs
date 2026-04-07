import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const inputDir = './src/assets';
const maxDimension = 1200;

async function processImages() {
  // Read all JPG/PNG files
  const files = fs.readdirSync(inputDir).filter(f => /\.(jpe?g|png)$/i.test(f));

  console.log(`Found ${files.length} images to optimize...`);

  for (const file of files) {
    if (file === 'hero.png') continue; // keep hero png intact if it's special, or optimize it if wanted
    
    const inputPath = path.join(inputDir, file);
    const newFileName = file.replace(/\.(JPG\.jpeg|jpeg|jpg|png)$/i, '.webp');
    const outputPath = path.join(inputDir, newFileName);

    console.log(`Processing: ${file} -> ${newFileName}`);

    try {
      await sharp(inputPath)
        .resize({
          width: maxDimension,
          height: maxDimension,
          fit: 'inside',
          withoutEnlargement: true
        })
        .webp({ quality: 75 }) // High compression, great for fast load times
        .toFile(outputPath);

      fs.unlinkSync(inputPath);
      console.log(`  ✓ Done and original deleted.`);
    } catch (err) {
      console.error(`  X Error processing ${file}:`, err);
    }
  }
}

processImages();

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const brainDir = 'C:/Users/Admin/.gemini/antigravity/brain/8dc7a5a2-68aa-468c-8c25-5e3b6c9ed633';
const publicAssets = path.join(__dirname, 'public', 'assets');
const srcAssets = path.join(__dirname, 'src', 'assets');

[publicAssets, srcAssets].forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

const filesToCopy = [
  {
    src: path.join(brainDir, 'media__1788776524016.png'),
    destNames: ['shoptik_logo.png']
  },
  {
    src: path.join(brainDir, 'media__1788776771831.png'),
    destNames: ['domixai_logo.png']
  },
  {
    src: path.join(brainDir, 'domix_ocean_water_seamless_1788775787435.png'),
    destNames: ['domix_ocean_water_orb.png']
  },
  {
    src: path.join(brainDir, 'media__1788773298353.png'),
    destNames: ['domix_official_logo.png']
  }
];

filesToCopy.forEach(item => {
  if (fs.existsSync(item.src)) {
    item.destNames.forEach(name => {
      fs.copyFileSync(item.src, path.join(publicAssets, name));
      fs.copyFileSync(item.src, path.join(srcAssets, name));
      console.log(`[Asset Copier] Copied ${name} successfully.`);
    });
  } else {
    console.warn(`[Asset Copier] Warning: Source file ${item.src} not found.`);
  }
});

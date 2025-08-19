import { createCanvas } from 'canvas';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create OG Image (1200x630)
function createOGImage() {
  const canvas = createCanvas(1200, 630);
  const ctx = canvas.getContext('2d');
  
  // Background gradient
  const gradient = ctx.createLinearGradient(0, 0, 1200, 630);
  gradient.addColorStop(0, '#f7931a');
  gradient.addColorStop(1, '#ff9500');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 1200, 630);
  
  // Bitcoin symbol
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 180px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('₿', 600, 250);
  
  // Title
  ctx.font = 'bold 48px Arial';
  ctx.fillText('Bitcoin Primer', 600, 400);
  
  // Subtitle
  ctx.font = '28px Arial';
  ctx.fillText('Understanding Bitcoin from Multiple Perspectives', 600, 460);
  
  // Chinese subtitle
  ctx.font = '24px Arial';
  ctx.fillText('从多学科视角理解比特币', 600, 510);
  
  // Save
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync(path.join(__dirname, '../public/bitcoin-og-image.png'), buffer);
  console.log('Created bitcoin-og-image.png');
}

// Create PWA Icons
function createPWAIcon(size) {
  const canvas = createCanvas(size, size);
  const ctx = canvas.getContext('2d');
  
  // Background
  ctx.fillStyle = '#f7931a';
  ctx.fillRect(0, 0, size, size);
  
  // Bitcoin symbol
  ctx.fillStyle = '#ffffff';
  const fontSize = size * 0.6;
  ctx.font = `bold ${fontSize}px Arial`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('₿', size / 2, size / 2);
  
  // Save
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync(path.join(__dirname, `../public/bitcoin-icon-${size}.png`), buffer);
  console.log(`Created bitcoin-icon-${size}.png`);
}

// Generate all images
createOGImage();
createPWAIcon(192);
createPWAIcon(512);

console.log('All images generated successfully!');
const fs = require('fs');
const path = require('path');

const CONTENT_DIR = path.join(__dirname, '../content');
const IMAGE_BASE = '/public/blog/images/';
const DEFAULT_WIDTH = 600;

const imageRegex = /!\[\[([^|\]]+)(?:\|(\d+))?\]\]/g;

function convertImageLinks(content) {
  return content.replace(imageRegex, (match, filename, width) => {
    const safeFilename = filename.trim();
    const safeWidth = width ? width : DEFAULT_WIDTH;
    // Escape double quotes in filename for alt
    const alt = safeFilename.replace(/"/g, '&quot;');
    return `<Image src=\"${IMAGE_BASE}${safeFilename}\" width={${safeWidth}} alt=\"${alt}\" className=\"rounded-lg\" />`;
  });
}

function processFile(filePath) {
  const original = fs.readFileSync(filePath, 'utf8');
  const converted = convertImageLinks(original);
  if (original !== converted) {
    fs.writeFileSync(filePath, converted, 'utf8');
    console.log(`Converted: ${filePath}`);
  } else {
    console.log(`No changes: ${filePath}`);
  }
}

function main() {
  const files = fs.readdirSync(CONTENT_DIR).filter(f => f.endsWith('.mdx'));
  files.forEach(file => {
    processFile(path.join(CONTENT_DIR, file));
  });
}

main(); 
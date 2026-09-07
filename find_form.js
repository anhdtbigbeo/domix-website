import fs from 'fs';

const html = fs.readFileSync('github_new_page.html', 'utf-8');

// Match any input element
const inputRegex = /<input[^>]+>/gi;
let match;
console.log("=== INPUT TAGS FOUND IN GITHUB NEW PAGE ===");
while ((match = inputRegex.exec(html)) !== null) {
  const tag = match[0];
  if (tag.includes('token') || tag.includes('authenticity') || tag.includes('csrf') || tag.includes('name=')) {
    console.log(tag);
  }
}

// Match form tags
const formRegex = /<form[^>]+>/gi;
console.log("\n=== FORM TAGS FOUND ===");
while ((match = formRegex.exec(html)) !== null) {
  console.log(match[0]);
}

// Check for meta tags with csrf
const metaRegex = /<meta[^>]+>/gi;
console.log("\n=== META TAGS ===");
while ((match = metaRegex.exec(html)) !== null) {
  if (match[0].includes('csrf') || match[0].includes('token') || match[0].includes('nonce')) {
    console.log(match[0]);
  }
}

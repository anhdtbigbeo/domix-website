import fs from 'fs';

const html = fs.readFileSync('github_new_page.html', 'utf-8');

const regex = /<script[^>]*type="application\/json"[^>]*>([\s\S]*?)<\/script>/gi;
let match;
let count = 0;
while ((match = regex.exec(html)) !== null) {
  count++;
  console.log(`\n--- JSON SCRIPT #${count} ---`);
  console.log(match[1].slice(0, 300));
}

import fs from 'fs';

const html = fs.readFileSync('github_new_page.html', 'utf-8');

console.log("Searching for tokens in github_new_page.html...");

const tokens = [];
const regex = /name="([^"]*token[^"]*)"\s+value="([^"]+)"/gi;
let match;
while ((match = regex.exec(html)) !== null) {
  tokens.push({ name: match[1], value: match[2] });
}

const regex2 = /value="([^"]+)"\s+name="([^"]*token[^"]*)"/gi;
while ((match = regex2.exec(html)) !== null) {
  tokens.push({ name: match[2], value: match[1] });
}

const regexMeta = /meta[^>]*name="([^"]*token[^"]*)"[^>]*content="([^"]+)"/gi;
while ((match = regexMeta.exec(html)) !== null) {
  tokens.push({ name: match[1], value: match[2] });
}

console.log("Tokens found:", tokens);

// Search for any form inputs or json embedded data
const jsonMatches = html.match(/<script[^>]*type="application\/json"[^>]*>([\s\S]*?)<\/script>/gi);
console.log("Found JSON scripts count:", jsonMatches ? jsonMatches.length : 0);

import fs from 'fs';

const html = fs.readFileSync('github_new_page.html', 'utf-8');

const matches = html.match(/.{0,50}authenticity_token.{0,100}/gi);
console.log("Matches count:", matches ? matches.length : 0);
if (matches) {
  matches.forEach((m, i) => console.log(`[${i}] ${m}`));
}

const matchesCsrf = html.match(/.{0,50}csrf.{0,100}/gi);
console.log("CSRF Matches count:", matchesCsrf ? matchesCsrf.length : 0);
if (matchesCsrf) {
  matchesCsrf.slice(0, 10).forEach((m, i) => console.log(`[CSRF ${i}] ${m}`));
}

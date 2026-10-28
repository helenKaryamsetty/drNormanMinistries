
const fs = require('fs');
const path = require('path');

const url = process.env.SUPABASE_URL;
const key = process.env.SUPABASE_PUBLISHABLE_KEY;

if (!url || !key) {
  throw new Error('Missing Supabase environment variables');
}

const content = `export const environment = {
  production: true,
  supabaseUrl: ${JSON.stringify(url)},
  supabasePublishableKey: ${JSON.stringify(key)}
};
`;

const outputPath = path.join(
  __dirname,
  '../src/environments/environment.prod.ts'
);

fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, content);

console.log('Production environment generated.');

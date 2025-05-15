import { createServer } from 'http';
import { readFileSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const server = createServer((req, res) => {
  // Serve index.html for all routes to support SPA
  try {
    const indexPath = join(__dirname, '../dist/index.html');
    const html = readFileSync(indexPath, 'utf-8');
    res.setHeader('Content-Type', 'text/html');
    res.end(html);
  } catch (error) {
    console.error('Error serving the application:', error);
    res.statusCode = 500;
    res.end('Internal Server Error');
  }
});

export default server; 
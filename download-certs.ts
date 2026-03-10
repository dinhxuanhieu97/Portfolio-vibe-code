import fs from 'fs';
import https from 'https';
import path from 'path';

const certs = [
  { id: '66c5c4d2e9e51b1429b1060e194af331', name: 'ai-fundamentals' },
  { id: '09ccb73437aa2ec58c3c6d8afa24ca43', name: 'ai-brainstorming' },
  { id: 'b3aea2c600e7a072956d3c88d6041d5c', name: 'ai-research' },
  { id: '9ee93d18b3ca0d85d95f5b210ad38c5a', name: 'ai-writing' },
  { id: '831764e5baa5a03b54cb91bcdd97cd7d', name: 'ai-content' },
  { id: 'e2f875419e0618e0231fdee768b8a5d7', name: 'ai-data' },
  { id: '3fd266fa7c263f8149e380438409a2ba', name: 'ai-app' }
];

const dir = path.join(process.cwd(), 'public', 'certificates');
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

async function fetchHtml(url: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const options = {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      }
    };
    https.get(url, options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

async function downloadImage(url: string, dest: string) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode !== 200) {
        console.error(`Failed to download image: ${res.statusCode}`);
        resolve(null);
        return;
      }
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve(null);
      });
    }).on('error', (err) => {
      console.error(`Error downloading image:`, err.message);
      resolve(null);
    });
  });
}

async function download() {
  for (const cert of certs) {
    const url = `https://coursera.org/share/${cert.id}`;
    const dest = path.join(dir, `${cert.name}.jpeg`);
    
    console.log(`Fetching HTML for ${cert.name}...`);
    try {
      const html = await fetchHtml(url);
      const match = html.match(/<meta\s+property="og:image"\s+content="([^"]+)"/i);
      if (match && match[1]) {
        console.log(`Found image URL: ${match[1]}`);
        await downloadImage(match[1], dest);
      } else {
        console.error(`No og:image found for ${cert.name}`);
      }
    } catch (e) {
      console.error(`Error processing ${cert.name}:`, e);
    }
  }
}

download().then(() => console.log('Done!'));


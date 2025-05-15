// copy-videos.js
import { promises as fs } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';
import { dirname } from 'path';

// Get current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Create videos directory in dist
const sourceDir = path.join(__dirname, 'public', 'videos');
const targetDir = path.join(__dirname, 'dist', 'videos');

async function copyVideos() {
  try {
    // Create the target directory if it doesn't exist
    try {
      await fs.mkdir(targetDir, { recursive: true });
      console.log(`Created directory: ${targetDir}`);
    } catch (err) {
      if (err.code !== 'EEXIST') {
        throw err;
      }
    }

    // Read source directory
    const files = await fs.readdir(sourceDir);
    
    let copyCount = 0;
    
    // Copy each file
    for (const file of files) {
      const sourcePath = path.join(sourceDir, file);
      const targetPath = path.join(targetDir, file);

      // Check if it's a file
      const stats = await fs.stat(sourcePath);
      if (stats.isFile()) {
        try {
          await fs.copyFile(sourcePath, targetPath);
          copyCount++;
          console.log(`Copied: ${file}`);
        } catch (error) {
          console.error(`Error copying ${file}: ${error.message}`);
        }
      }
    }

    console.log(`Successfully copied ${copyCount} video files to dist/videos`);
  } catch (err) {
    console.error(`Error in copy process: ${err.message}`);
    process.exit(1);
  }
}

// Execute the copy
copyVideos(); 
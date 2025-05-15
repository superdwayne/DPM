// copy-videos.js
const fs = require('fs');
const path = require('path');

// Create videos directory in dist
const sourceDir = path.join(__dirname, 'public', 'videos');
const targetDir = path.join(__dirname, 'dist', 'videos');

// Create the target directory if it doesn't exist
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
  console.log(`Created directory: ${targetDir}`);
}

// Copy all files from public/videos to dist/videos
fs.readdir(sourceDir, (err, files) => {
  if (err) {
    console.error(`Error reading source directory: ${err.message}`);
    process.exit(1);
  }

  let copyCount = 0;
  files.forEach(file => {
    const sourcePath = path.join(sourceDir, file);
    const targetPath = path.join(targetDir, file);

    // Check if it's a file
    const stats = fs.statSync(sourcePath);
    if (stats.isFile()) {
      try {
        fs.copyFileSync(sourcePath, targetPath);
        copyCount++;
        console.log(`Copied: ${file}`);
      } catch (error) {
        console.error(`Error copying ${file}: ${error.message}`);
      }
    }
  });

  console.log(`Successfully copied ${copyCount} video files to dist/videos`);
}); 
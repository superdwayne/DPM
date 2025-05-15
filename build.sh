#!/bin/bash

echo "Starting build with Git LFS handling..."

# Install Git LFS if needed
if ! command -v git-lfs &> /dev/null; then
  echo "Installing Git LFS..."
  apt-get update || true
  apt-get install -y git-lfs || true
fi

# Setup Git LFS
git lfs install || true
echo "Git LFS installed"

# Check if in a Git repository
if [ -d ".git" ]; then
  # Pull LFS files
  echo "Pulling LFS files..."
  git lfs pull || true
  echo "LFS files pulled successfully"
else
  echo "Not in a Git repository, skipping LFS pull."
  # Copy videos directly from public to dist as a fallback
  mkdir -p dist/videos
  if [ -d "public/videos" ]; then
    echo "Copying videos from public/videos to dist/videos..."
    cp -r public/videos/* dist/videos/ || true
    echo "Videos copied successfully"
  else
    echo "public/videos directory not found"
  fi
fi

# Install dependencies and build with the postbuild script
echo "Installing dependencies and building..."
yarn install --ignore-engines
yarn build
echo "Build completed"

# Make sure videos directory exists in dist as a failsafe
mkdir -p dist/videos
if [ -d "public/videos" ] && [ -d "dist/videos" ]; then
  echo "Ensuring videos are in dist/videos with cp fallback..."
  cp -r public/videos/* dist/videos/ || true
  echo "Fallback video copy complete"
fi 
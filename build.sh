#!/bin/bash

echo "Starting build with Git LFS handling..."

# Install Git LFS if needed
if ! command -v git-lfs &> /dev/null; then
  echo "Installing Git LFS..."
  apt-get update
  apt-get install -y git-lfs
fi

# Setup Git LFS
git lfs install
echo "Git LFS installed"

# Pull LFS files
echo "Pulling LFS files..."
git lfs pull
echo "LFS files pulled successfully"

# Install dependencies and build with the postbuild script
echo "Installing dependencies and building..."
yarn install --ignore-engines
yarn build
echo "Build completed" 
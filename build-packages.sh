#!/bin/bash

# Build script for MDX Editor packages
# This script builds all packages in the correct dependency order

echo "Building MDX Editor packages..."

# Exit on error
set -e

# Save current directory
ROOT_DIR=$(pwd)

# Check if TypeScript is installed globally, if not install it
if ! command -v tsc &> /dev/null; then
    echo "TypeScript compiler (tsc) not found. Installing globally..."
    npm install -g typescript
fi

# Check if Vite is installed globally, if not install it
if ! command -v vite &> /dev/null; then
    echo "Vite not found. Installing globally..."
    npm install -g vite
fi

echo "TypeScript and Vite are available."

# Build core packages first (no dependencies)
echo "Building @sijanbhattarai/mdx-editor-core..."
cd packages/mdx-editor-core && npm run build
cd "$ROOT_DIR"

echo "Building @sijanbhattarai/mdx-editor-utils..."
cd packages/mdx-editor-utils && npm run build
cd "$ROOT_DIR"

echo "Building @sijanbhattarai/mdx-editor-datasets..."
cd packages/mdx-editor-datasets && npm run build
cd "$ROOT_DIR"

echo "Building @sijanbhattarai/mdx-editor-ui..."
cd packages/mdx-editor-ui && npm run build
cd "$ROOT_DIR"

echo "Building @sijanbhattarai/mdx-editor-plugins..."
cd packages/mdx-editor-plugins && npm run build
cd "$ROOT_DIR"

# Build component packages (depend on core packages)
echo "Building @sijanbhattarai/mdx-editor-maps..."
cd packages/mdx-editor-maps && npm run build
cd "$ROOT_DIR"

echo "Building @sijanbhattarai/mdx-editor-charts..."
cd packages/mdx-editor-charts && npm run build
cd "$ROOT_DIR"

echo "Building @sijanbhattarai/mdx-editor-editor..."
cd packages/mdx-editor-editor && npm run build
cd "$ROOT_DIR"

echo "Building @sijanbhattarai/mdx-editor-preview..."
cd packages/mdx-editor-preview && npm run build
cd "$ROOT_DIR"

echo "All packages built successfully!"
echo "Now you can publish packages individually with 'npm publish --access public' in each package directory."
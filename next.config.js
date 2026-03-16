/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',  // Enables static export for GitHub Pages
  basePath: '/sync_website', // Replace with your repository name
  assetPrefix: '/sync_website', // Replace with your repository name
  images: {
    unoptimized: true, // Required for static export
  },
};

module.exports = nextConfig;

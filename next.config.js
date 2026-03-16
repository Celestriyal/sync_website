/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',  // Enables static export for GitHub Pages
  images: {
    unoptimized: true, // Required for static export
  },
};

if (process.env.NODE_ENV === 'production') {
  nextConfig.basePath = '/sync_website';
}

module.exports = nextConfig;

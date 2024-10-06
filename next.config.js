const { withContentlayer } = require("next-contentlayer");

// Define your Next.js configuration object
const nextConfig = {
  // Add any custom Next.js configuration here
  reactStrictMode: true,
  // Add other configuration options as needed
};

// Export the configuration wrapped with Contentlayer
module.exports = withContentlayer(nextConfig);

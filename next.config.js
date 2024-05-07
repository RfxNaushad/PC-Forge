/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['avatars.githubusercontent.com'], // Add the domains you want to allow for image optimization
    deviceSizes: [320, 640, 768, 1024, 1280, 1600], // The device sizes for the image optimization
    imageSizes: [16, 32, 48, 64, 96], // The image sizes to be used in different layouts
    loader: 'default', // The loader to be used for the Image component ('default', 'imgix', 'cloudinary', 'akamai', or a custom loader function)
    path: '/_next/image', // The path for the optimized images
    minimumCacheTTL: 60, // The minimum time the image is kept in the cache (in seconds)
    formats: ['image/avif', 'image/webp'], // The image formats to be used for optimization (make sure your server supports these formats)
  },
}

module.exports = nextConfig

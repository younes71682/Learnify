/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@mui/x-charts'],
}

module.exports = {
  ...nextConfig,
  images: {
    domains: ['www.learnify.v1r.ir'],
  },
};

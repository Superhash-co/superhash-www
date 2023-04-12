const isProd = process.env.NODE_ENV === 'production'

/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: '', // isProd ? '/superhash-www/' : '',
  reactStrictMode: true,
  images:{
    unoptimized: true
  }
}

module.exports = nextConfig

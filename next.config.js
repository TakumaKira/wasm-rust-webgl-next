/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, options) => {
    config.experiments.asyncWebAssembly = true
    config.externals.push({
      fs: 'commonjs node:fs'
    })
    return config
  },
}

module.exports = nextConfig

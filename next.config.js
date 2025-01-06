/** @type {import('next').NextConfig} */

const webpack = require('webpack');

const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        tls: false,
        net: false,
        child_process: false,
      };
    }

    // Add NormalModuleReplacementPlugin to handle 'node:' scheme
    config.plugins.push(
      new webpack.NormalModuleReplacementPlugin(/^node:/, (resource) => {
        resource.request = resource.request.replace(/^node:/, '');
      })
    );

    // Ensure 'url' is resolved correctly
    config.resolve.fallback = {
      ...config.resolve.fallback,
      url: require.resolve('url'),
    };

    return config;
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;

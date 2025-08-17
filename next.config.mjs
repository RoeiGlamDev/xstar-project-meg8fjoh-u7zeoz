import { NextResponse } from 'next/server';

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [], // Replace with your image domain
  },
  experimental: {
    optimizeCss: true
}
};

export default nextConfig;
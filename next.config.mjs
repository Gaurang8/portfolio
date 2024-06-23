// Corrected code for next.config.mjs
import pkg from 'next';
const { NextConfig } = pkg;

const nextConfig = {
    images: {
        formats: ['image/avif', 'image/webp'],
    },
};

export default nextConfig;
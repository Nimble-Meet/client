/** @type {import('next').NextConfig} */

const withTwin = require('./withTwin');

const nextConfig = withTwin({
    reactStrictMode: true,
    experimental: { appDir: true },
    swcMinify: true,
    output: 'standalone',
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: `http://${process.env.REACT_APP_SERVER_DOMAIN_URL}/api/:path*`
            }
        ];
    }
});

module.exports = nextConfig;

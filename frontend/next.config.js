/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
	},
	images: {
		domains: ['localhost', 'cdn.discordapp.com'],
	},
};

module.exports = nextConfig;

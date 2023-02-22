/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
	},

	images: {
		domains: ["images.unsplash.com", "cdn.discordapp.com"],
	},
};

module.exports = nextConfig;

const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");

const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["images.pokemontcg.io"],
    disableStaticImages: true,
  },
};

module.exports = withPlugins([[withImages]], nextConfig);

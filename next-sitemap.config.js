/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://kpishopfitter.co.uk',
  outDir: './build',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  trailingSlash: true,
  exclude: ['/404'],
};

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://kpishopfitter.co.uk',
  outDir: './build',
  generateRobotsTxt: true,
  trailingSlash: true,
  exclude: ['/404'],
};

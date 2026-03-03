/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://www.example.com",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  exclude: ["/api/*", "/lp/*"],
  robotsTxtOptions: {
    additionalSitemaps: [],
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/lp/"],
      },
    ],
  },
};

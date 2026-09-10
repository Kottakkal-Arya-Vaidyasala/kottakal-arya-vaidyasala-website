import { MetadataRoute } from "next"

/**
 * Standard Robots.txt generator for search engines.
 */
export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://www.kottakkalaryavaidyasala.ae"
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/api/",
        "/admin/",
        "/private/",
      ],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}

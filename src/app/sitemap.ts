import { MetadataRoute } from "next"

/**
 * Dynamic Sitemap XML generator.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://kottakkal-ayurveda.ae" // Replace with verified domain on production
  
  const routes = [
    "",
    "/about",
    "/treatments",
    "/doctors",
    "/gallery",
    "/testimonials",
    "/contact",
  ]
  
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : 0.8,
  }))
}

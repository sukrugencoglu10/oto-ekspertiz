import { SITE_CONFIG } from "./constants";

export function generateLocalBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    name: SITE_CONFIG.name,
    image: `${SITE_CONFIG.url}/images/storefront.jpg`,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE_CONFIG.address.street,
      addressLocality: SITE_CONFIG.address.district,
      addressRegion: SITE_CONFIG.address.city,
      postalCode: SITE_CONFIG.address.postalCode,
      addressCountry: SITE_CONFIG.address.country,
    },
    telephone: SITE_CONFIG.phoneRaw,
    url: SITE_CONFIG.url,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "245",
    },
    priceRange: "₺₺",
    geo: {
      "@type": "GeoCoordinates",
      latitude: 41.03,
      longitude: 28.83,
    },
    areaServed: [
      { "@type": "City", name: "Bağcılar" },
      { "@type": "City", name: "Güngören" },
      { "@type": "City", name: "Bahçelievler" },
      { "@type": "City", name: "Esenler" },
      { "@type": "City", name: "Küçükçekmece" },
    ],
  };
}

export function generateBreadcrumbJsonLd(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

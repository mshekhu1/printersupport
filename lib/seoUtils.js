// SEO utility functions for structured data

export function generateLocalBusinessJsonLd({ name, url, description, phone, areaServed }) {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': url,
    name: name,
    description: description,
    url: url,
    telephone: phone,
    areaServed: {
      '@type': 'Country',
      name: areaServed || 'United States'
    },
    serviceType: 'Remote Printer Support',
    priceRange: '$$',
  }, null, 2);
}

export function generateServiceJsonLd({ name, description, provider, areaServed, url }) {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: name,
    description: description,
    provider: {
      '@type': 'LocalBusiness',
      name: provider || 'ZamZam Print Support',
    },
    areaServed: {
      '@type': areaServed?.type || 'State',
      name: areaServed?.name || 'United States'
    },
    serviceType: 'Remote Printer Support',
    url: url,
  }, null, 2);
}

export function generateOrganizationJsonLd({ name, url, logo, description }) {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: name,
    url: url,
    logo: logo,
    description: description,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-888-769-4448',
      contactType: 'Customer Service',
      areaServed: 'US',
      availableLanguage: 'English'
    }
  }, null, 2);
}


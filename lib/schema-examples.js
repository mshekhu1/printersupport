/**
 * Schema.org Usage Examples
 * 
 * This file shows how to use the schema generators in your pages
 */

import { 
  breadcrumbList, 
  webPage, 
  webSite, 
  organization, 
  localBusiness,
  service,
  article,
  faqPage,
  offer,
  stringifySchema
} from './schema';

// ============================================
// Example 1: BreadcrumbList (used in Breadcrumbs component)
// ============================================
export function breadcrumbExample() {
  const breadcrumbSchema = breadcrumbList([
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'HP Printer Support', url: '/services/hp-printer-support' }
  ]);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: stringifySchema(breadcrumbSchema) }}
    />
  );
}

// ============================================
// Example 2: WebPage with Breadcrumb
// ============================================
export function webPageExample() {
  const webPageSchema = webPage({
    name: 'HP Printer Support',
    description: 'Expert HP printer troubleshooting and support',
    url: '/services/hp-printer-support',
    breadcrumb: [
      { name: 'Home', url: '/' },
      { name: 'Services', url: '/services' },
      { name: 'HP Printer Support', url: '/services/hp-printer-support' }
    ],
    datePublished: '2024-01-01',
  });

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: stringifySchema(webPageSchema) }}
    />
  );
}

// ============================================
// Example 3: Service with Offers (Pricing Page)
// ============================================
export function serviceWithOffersExample() {
  const serviceSchema = service({
    name: 'Remote Printer Technical Support',
    description: 'Professional remote printer support, setup and troubleshooting',
    url: '/pricing',
    offers: [
      {
        name: 'One-Time Printer Fix',
        price: '49',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
      },
      {
        name: 'Monthly Support Plan',
        price: '99',
        priceCurrency: 'USD',
        priceSpecification: {
          unitCode: 'MON',
          unitText: 'month',
        },
      },
    ],
  });

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: stringifySchema(serviceSchema) }}
    />
  );
}

// ============================================
// Example 4: Article (Blog Post)
// ============================================
export function articleExample() {
  const articleSchema = article({
    headline: 'How to Fix Printer Offline Issues',
    description: 'Complete guide to fixing printer offline problems on Windows',
    url: '/blog/fix-printer-offline',
    image: '/blog-image.jpg',
    author: 'ZamZam Print Support',
    datePublished: '2024-01-15',
    dateModified: '2024-01-16',
  });

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: stringifySchema(articleSchema) }}
    />
  );
}

// ============================================
// Example 5: FAQPage
// ============================================
export function faqPageExample() {
  const faqSchema = faqPage([
    {
      q: 'How quickly can you fix my printer?',
      a: 'Most issues are resolved in 20–45 minutes during the remote session.',
    },
    {
      q: 'Do you support every printer brand?',
      a: 'We support most popular brands (HP, Canon, Epson, Brother, etc.)',
    },
  ]);

  return faqSchema ? (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: stringifySchema(faqSchema) }}
    />
  ) : null;
}

// ============================================
// Example 6: Multiple Schemas Combined
// ============================================
export function multipleSchemasExample() {
  const webPageSchema = webPage({
    name: 'Service Page',
    description: 'Service description',
    url: '/services/service-name',
  });

  const serviceSchema = service({
    name: 'Service Name',
    description: 'Service description',
    url: '/services/service-name',
  });

  const faqSchema = faqPage([
    { q: 'Question?', a: 'Answer.' },
  ]);

  // Combine multiple schemas
  const allSchemas = [webPageSchema, serviceSchema, faqSchema].filter(Boolean);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: stringifySchema(allSchemas) }}
    />
  );
}

// ============================================
// Example 7: Organization (for Layout/Homepage)
// ============================================
export function organizationExample() {
  const orgSchema = organization({
    name: 'ZamZam Print Support',
    url: 'https://www.zamzamprint.com',
    logo: '/logo.png',
    description: 'Professional remote printer support services',
    telephone: '+1-888-769-4448',
    email: 'support@zamzamprint.com',
    sameAs: [
      'https://www.facebook.com/zamzamprint',
      'https://twitter.com/zamzamprint',
    ],
  });

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: stringifySchema(orgSchema) }}
    />
  );
}

// ============================================
// Example 8: LocalBusiness
// ============================================
export function localBusinessExample() {
  const businessSchema = localBusiness({
    name: 'ZamZam Print Support',
    url: 'https://www.zamzamprint.com',
    description: 'Remote printer support services for US customers',
    telephone: '+1-888-769-4448',
    areaServed: 'United States',
    priceRange: '$$',
    serviceType: 'Remote Printer Support',
  });

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: stringifySchema(businessSchema) }}
    />
  );
}

// ============================================
// Example 9: WebSite (for Layout)
// ============================================
export function webSiteExample() {
  const siteSchema = webSite({
    name: 'ZamZam Print Support',
    url: 'https://www.zamzamprint.com',
    description: 'Professional remote printer support services',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://www.zamzamprint.com/search?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  });

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: stringifySchema(siteSchema) }}
    />
  );
}

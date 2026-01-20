# Schema.org Usage Guide

This guide explains how to use the schema.org JSON-LD generators for SEO.

## Quick Start

```javascript
import { breadcrumbList, webPage, service, stringifySchema } from '@/lib/schema';

// Generate schema
const schema = webPage({
  name: 'Page Name',
  description: 'Page description',
  url: '/page-url',
});

// Use in component
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: stringifySchema(schema) }}
/>
```

## Available Schema Functions

### BreadcrumbList
```javascript
import { breadcrumbList } from '@/lib/schema';

const schema = breadcrumbList([
  { name: 'Home', url: '/' },
  { name: 'Services', url: '/services' },
  { name: 'Current Page', url: '/current' }
]);
```

### WebPage
```javascript
import { webPage } from '@/lib/schema';

const schema = webPage({
  name: 'Page Name',
  description: 'Page description',
  url: '/page-url',
  breadcrumb: [
    { name: 'Home', url: '/' },
    { name: 'Page', url: '/page-url' }
  ],
  datePublished: '2024-01-01',
  image: '/image.jpg',
});
```

### Service
```javascript
import { service } from '@/lib/schema';

const schema = service({
  name: 'Service Name',
  description: 'Service description',
  url: '/services/service-name',
  offers: [
    {
      name: 'Plan Name',
      price: '49',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    }
  ]
});
```

### Article
```javascript
import { article } from '@/lib/schema';

const schema = article({
  headline: 'Article Title',
  description: 'Article description',
  url: '/blog/article-slug',
  image: '/article-image.jpg',
  author: 'Author Name',
  datePublished: '2024-01-15',
  dateModified: '2024-01-16',
});
```

### FAQPage
```javascript
import { faqPage } from '@/lib/schema';

const schema = faqPage([
  { q: 'Question?', a: 'Answer.' },
  { question: 'Another question?', answer: 'Another answer.' }
]);
```

### Organization
```javascript
import { organization } from '@/lib/schema';

const schema = organization({
  name: 'Company Name',
  url: 'https://example.com',
  logo: '/logo.jpg',
  description: 'Company description',
  telephone: '+1-888-000-0000',
  email: 'contact@example.com',
  sameAs: ['https://facebook.com/company', 'https://twitter.com/company']
});
```

### LocalBusiness
```javascript
import { localBusiness } from '@/lib/schema';

const schema = localBusiness({
  name: 'Business Name',
  url: 'https://example.com',
  description: 'Business description',
  telephone: '+1-888-000-0000',
  areaServed: 'United States',
  priceRange: '$$',
  serviceType: 'Service Type'
});
```

## Complete Page Example

```javascript
import Breadcrumbs from '@/app/components/Breadcrumbs';
import { webPage, service, faqPage, stringifySchema } from '@/lib/schema';

export default function ServicePage() {
  // Breadcrumbs
  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'Service Name', url: '/services/service-name' }
  ];

  // Generate schemas
  const webPageSchema = webPage({
    name: 'Service Name',
    description: 'Service description',
    url: '/services/service-name',
    breadcrumb: breadcrumbItems,
  });

  const serviceSchema = service({
    name: 'Service Name',
    description: 'Service description',
    url: '/services/service-name',
  });

  const faqSchema = faqPage([
    { q: 'Question?', a: 'Answer.' }
  ]);

  // Combine schemas
  const allSchemas = [webPageSchema, serviceSchema, faqSchema].filter(Boolean);

  return (
    <>
      {/* Schema Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: stringifySchema(allSchemas) }}
      />

      {/* Breadcrumbs */}
      <Breadcrumbs items={breadcrumbItems} />

      {/* Page Content */}
      <main>
        <h1>Service Name</h1>
        {/* Your content */}
      </main>
    </>
  );
}
```

## Helper Functions

### stringifySchema
Converts schema object(s) to JSON string for script tags:

```javascript
import { stringifySchema } from '@/lib/schema';

// Single schema
const json = stringifySchema(schema);

// Multiple schemas
const json = stringifySchema([schema1, schema2, schema3]);
```

## Notes

- All URLs are automatically converted to absolute URLs
- Base URL defaults to `https://www.zamzamprint.com`
- Images are automatically converted to absolute URLs
- All schemas follow official schema.org specifications
- Null/undefined schemas are automatically filtered out

## Schema.org Documentation

For more details on schema types, visit:
- https://schema.org/BreadcrumbList
- https://schema.org/WebPage
- https://schema.org/Service
- https://schema.org/Article
- https://schema.org/FAQPage
- https://schema.org/Organization
- https://schema.org/LocalBusiness

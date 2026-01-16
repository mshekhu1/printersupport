/**
 * Schema.org JSON-LD Schema Generators
 * 
 * All functions return schema.org compliant objects that can be stringified to JSON-LD
 * Based on official schema.org specifications: https://schema.org/
 */

const SITE_URL = 'https://www.zamzamprint.com';
const SITE_NAME = 'ZamZam Print Support';

/**
 * Generate BreadcrumbList schema
 * @param {Array} items - Array of {name, url} objects
 * @param {string} baseUrl - Base URL for absolute URLs
 * @returns {Object} BreadcrumbList schema
 */
export function breadcrumbList(items = [], baseUrl = SITE_URL) {
  const normalizedBaseUrl = baseUrl.replace(/\/+$/, '');
  
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => {
      let itemUrl = item.url;
      if (!itemUrl.startsWith('http')) {
        itemUrl = `${normalizedBaseUrl}${itemUrl.startsWith('/') ? itemUrl : '/' + itemUrl}`;
      }
      return {
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: itemUrl,
      };
    }),
  };
}

/**
 * Generate WebPage schema
 * @param {Object} options
 * @returns {Object} WebPage schema
 */
export function webPage({
  name,
  description,
  url,
  breadcrumb,
  isPartOf = SITE_URL,
  datePublished,
  dateModified,
  image,
}) {
  const fullUrl = url?.startsWith('http') ? url : `${SITE_URL}${url || ''}`;
  
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: name || 'Page',
    description: description || '',
    url: fullUrl,
    isPartOf: {
      '@type': 'WebSite',
      name: SITE_NAME,
      url: isPartOf,
    },
  };

  if (breadcrumb && breadcrumb.length > 0) {
    schema.breadcrumb = breadcrumbList(breadcrumb);
  }

  if (datePublished) schema.datePublished = datePublished;
  if (dateModified) schema.dateModified = dateModified;
  if (image) {
    schema.image = image.startsWith('http') ? image : `${SITE_URL}${image.startsWith('/') ? image : '/' + image}`;
  }

  return schema;
}

/**
 * Generate WebSite schema
 * @param {Object} options
 * @returns {Object} WebSite schema
 */
export function webSite({
  name = SITE_NAME,
  url = SITE_URL,
  description,
  potentialAction,
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name,
    url,
  };

  if (description) schema.description = description;
  if (potentialAction) schema.potentialAction = potentialAction;

  return schema;
}

/**
 * Generate Organization schema
 * @param {Object} options
 * @returns {Object} Organization schema
 */
export function organization({
  name = SITE_NAME,
  url = SITE_URL,
  logo,
  description,
  telephone = '+1-888-769-4448',
  email,
  sameAs = [],
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name,
    url,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone,
      contactType: 'customer service',
      areaServed: {
        '@type': 'Country',
        name: 'United States',
      },
      availableLanguage: 'English',
    },
  };

  if (logo) {
    schema.logo = logo.startsWith('http') ? logo : `${SITE_URL}${logo.startsWith('/') ? logo : '/' + logo}`;
  }
  if (description) schema.description = description;
  if (email) schema.contactPoint.email = email;
  if (sameAs.length > 0) schema.sameAs = sameAs;

  return schema;
}

/**
 * Generate LocalBusiness schema
 * @param {Object} options
 * @returns {Object} LocalBusiness schema
 */
export function localBusiness({
  name = SITE_NAME,
  url = SITE_URL,
  description,
  telephone = '+1-888-769-4448',
  areaServed = 'United States',
  priceRange = '$$',
  serviceType = 'Remote Printer Support',
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': url,
    name,
    description: description || 'Professional remote printer support services',
    url,
    telephone,
    areaServed: {
      '@type': 'Country',
      name: areaServed,
    },
    serviceType,
    priceRange,
  };
}

/**
 * Generate Service schema
 * @param {Object} options
 * @returns {Object} Service schema
 */
export function service({
  name,
  description,
  url,
  provider = SITE_NAME,
  providerUrl = SITE_URL,
  areaServed = 'United States',
  serviceType = 'Remote Printer Support',
  offers,
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: {
      '@type': 'LocalBusiness',
      name: provider,
      url: providerUrl,
    },
    areaServed: {
      '@type': 'Country',
      name: areaServed,
    },
    serviceType,
  };

  if (url) {
    schema.url = url.startsWith('http') ? url : `${SITE_URL}${url.startsWith('/') ? url : '/' + url}`;
  }
  if (offers && offers.length > 0) {
    schema.offers = offers.map(offer => ({
      '@type': 'Offer',
      name: offer.name,
      price: offer.price,
      priceCurrency: offer.priceCurrency || 'USD',
      availability: offer.availability || 'https://schema.org/InStock',
      ...(offer.priceSpecification && {
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          unitCode: offer.priceSpecification.unitCode,
          unitText: offer.priceSpecification.unitText,
          price: offer.price,
        },
      }),
    }));
  }

  return schema;
}

/**
 * Generate Article schema
 * @param {Object} options
 * @returns {Object} Article schema
 */
export function article({
  headline,
  description,
  url,
  image,
  author = SITE_NAME,
  publisher = SITE_NAME,
  datePublished,
  dateModified,
}) {
  const fullUrl = url?.startsWith('http') ? url : `${SITE_URL}${url || ''}`;
  const imageUrl = image?.startsWith('http') 
    ? image 
    : image 
      ? `${SITE_URL}${image.startsWith('/') ? image : '/' + image}`
      : undefined;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    author: {
      '@type': 'Organization',
      name: author,
    },
    publisher: {
      '@type': 'Organization',
      name: publisher,
      url: SITE_URL,
    },
    datePublished,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': fullUrl,
    },
  };

  if (imageUrl) schema.image = imageUrl;
  if (dateModified) schema.dateModified = dateModified;

  return schema;
}

/**
 * Generate FAQPage schema
 * @param {Array} faqs - Array of {q/question, a/answer} objects
 * @returns {Object} FAQPage schema
 */
export function faqPage(faqs = []) {
  if (!faqs || faqs.length === 0) return null;

  const mainEntity = faqs
    .filter(faq => (faq.q || faq.question) && (faq.a || faq.answer))
    .map(faq => ({
      '@type': 'Question',
      name: faq.q || faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a || faq.answer,
      },
    }));

  if (mainEntity.length === 0) return null;

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity,
  };
}

/**
 * Generate Offer schema
 * @param {Object} options
 * @returns {Object} Offer schema
 */
export function offer({
  name,
  price,
  priceCurrency = 'USD',
  availability = 'https://schema.org/InStock',
  url,
  priceSpecification,
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Offer',
    name,
    price,
    priceCurrency,
    availability,
  };

  if (url) {
    schema.url = url.startsWith('http') ? url : `${SITE_URL}${url.startsWith('/') ? url : '/' + url}`;
  }
  if (priceSpecification) {
    schema.priceSpecification = {
      '@type': 'UnitPriceSpecification',
      unitCode: priceSpecification.unitCode,
      unitText: priceSpecification.unitText,
      price: priceSpecification.price || price,
    };
  }

  return schema;
}

/**
 * Generate ItemList schema
 * @param {Array} items - Array of items
 * @param {string} name - Name of the list
 * @returns {Object} ItemList schema
 */
export function itemList(items = [], name) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    ...(name && { name }),
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: item,
    })),
  };
}

/**
 * Generate HowTo schema
 * @param {Object} options
 * @returns {Object} HowTo schema
 */
export function howTo({
  name,
  description,
  image,
  totalTime,
  step,
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name,
    description,
  };

  if (image) {
    schema.image = image.startsWith('http') ? image : `${SITE_URL}${image.startsWith('/') ? image : '/' + image}`;
  }
  if (totalTime) schema.totalTime = totalTime;
  if (step && step.length > 0) {
    schema.step = step.map((s, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: s.name,
      text: s.text,
      ...(s.image && { image: s.image }),
      ...(s.url && { url: s.url }),
    }));
  }

  return schema;
}

/**
 * Generate VideoObject schema
 * @param {Object} options
 * @returns {Object} VideoObject schema
 */
export function videoObject({
  name,
  description,
  thumbnailUrl,
  uploadDate,
  duration,
  contentUrl,
  embedUrl,
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name,
    description,
    thumbnailUrl,
    uploadDate,
    duration,
    contentUrl,
    embedUrl,
  };
}

/**
 * Generate Review schema
 * @param {Object} options
 * @returns {Object} Review schema
 */
export function review({
  author,
  datePublished,
  reviewBody,
  reviewRating,
  itemReviewed,
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Review',
    author: {
      '@type': 'Person',
      name: author,
    },
    datePublished,
    reviewBody,
    itemReviewed: {
      '@type': 'Service',
      name: itemReviewed,
    },
  };

  if (reviewRating) {
    schema.reviewRating = {
      '@type': 'Rating',
      ratingValue: reviewRating.ratingValue,
      bestRating: reviewRating.bestRating || 5,
      worstRating: reviewRating.worstRating || 1,
    };
  }

  return schema;
}

/**
 * Generate AggregateRating schema
 * @param {Object} options
 * @returns {Object} AggregateRating schema
 */
export function aggregateRating({
  ratingValue,
  reviewCount,
  bestRating = 5,
  worstRating = 1,
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'AggregateRating',
    ratingValue,
    reviewCount,
    bestRating,
    worstRating,
  };
}

/**
 * Helper to stringify schema for JSON-LD script tag
 * @param {Object|Array} schema - Schema object or array of schemas
 * @returns {string} JSON string
 */
export function stringifySchema(schema) {
  if (!schema) return '';
  const schemas = Array.isArray(schema) ? schema : [schema];
  const validSchemas = schemas.filter(s => s !== null && s !== undefined);
  if (validSchemas.length === 0) return '';
  return JSON.stringify(validSchemas.length === 1 ? validSchemas[0] : validSchemas, null, 2);
}

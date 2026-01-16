// SEO utility functions for structured data
// These functions use the schema.org generators from schema.js

import { 
  localBusiness, 
  service, 
  organization,
  stringifySchema 
} from './schema';

/**
 * Generate LocalBusiness JSON-LD (backward compatible)
 * @param {Object} options
 * @returns {string} JSON string
 */
export function generateLocalBusinessJsonLd({ name, url, description, phone, areaServed }) {
  const schema = localBusiness({
    name,
    url,
    description,
    telephone: phone,
    areaServed,
  });
  return stringifySchema(schema);
}

/**
 * Generate Service JSON-LD (backward compatible)
 * @param {Object} options
 * @returns {string} JSON string
 */
export function generateServiceJsonLd({ name, description, provider, areaServed, url }) {
  const schema = service({
    name,
    description,
    url,
    provider,
    areaServed: areaServed?.name || areaServed,
  });
  return stringifySchema(schema);
}

/**
 * Generate Organization JSON-LD (backward compatible)
 * @param {Object} options
 * @returns {string} JSON string
 */
export function generateOrganizationJsonLd({ name, url, logo, description }) {
  const schema = organization({
    name,
    url,
    logo,
    description,
  });
  return stringifySchema(schema);
}

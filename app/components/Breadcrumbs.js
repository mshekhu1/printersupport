import { breadcrumbList, stringifySchema } from '@/lib/schema';

export default function Breadcrumbs({ items, baseUrl = 'https://www.zamzamprint.com' }) {
  // Generate structured data for SEO using schema.org
  const structuredData = breadcrumbList(items, baseUrl);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: stringifySchema(structuredData) }}
      />
      <nav aria-label="Breadcrumb" className="mb-6">
        <ol className="flex items-center space-x-2 text-sm text-gray-600">
          {items.map((item, index) => (
            <li key={index} className="flex items-center">
              {index > 0 && (
                <span className="mx-2 text-gray-400" aria-hidden="true">
                  /
                </span>
              )}
              {index === items.length - 1 ? (
                <span className="text-gray-900 font-medium" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <a
                  href={item.url}
                  className="hover:text-blue-600 transition-colors"
                >
                  {item.name}
                </a>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}

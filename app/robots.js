export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/blog-uploads', '/blog-uploads/'],
      },
    ],
    sitemap: 'https://www.zamzamprint.com/sitemap.xml',
    host: 'https://www.zamzamprint.com',
  };
}

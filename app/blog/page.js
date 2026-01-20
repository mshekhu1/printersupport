// app/blog/page.tsx
import Link from 'next/link';
import { Suspense } from 'react';
import { supabase } from '@/lib/supabaseClient';
import BlogListClient from '../components/BlogListClient';
import Pagination from '../components/Pagination';
import { breadcrumbList, stringifySchema } from '@/lib/schema';

// Revalidate every 30 minutes (1800 seconds)
// This is usually perfect balance for blog listing page
export const revalidate = 1800;

// Optional: if you want even stronger caching (but less fresh)
// export const revalidate = 3600; // 1 hour

// Remove this completely in production:
// export const dynamic = 'force-dynamic'

export const metadata = {
  title: 'Printer Support Blog | Troubleshooting Guides & Tips (US)',
  description:
    'Latest printer troubleshooting guides, setup tutorials, driver fixes and expert tips. Actionable step-by-step help for HP, Canon, Epson, Brother & more.',
  keywords: [
    'printer support blog',
    'printer troubleshooting',
    'printer repair guide',
    'printer setup tutorial',
    'printer driver help',
    'fix printer offline',
    'printer not printing fix',
  ],
  openGraph: {
    title: 'Printer Support Blog – Practical Fixes & Guides',
    description:
      'Helpful printer troubleshooting articles, step-by-step guides and expert tips for US customers.',
    type: 'website',
    url: 'https://www.zamzamprint.com/blog',
    images: [
      {
        url: '/og-blog-listing.jpg',
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: 'https://www.zamzamprint.com/blog',
  },
};

async function getBlogs(page = 1, limit = 12) {
  try {
    const from = (page - 1) * limit;
    const to = from + limit - 1;

    const { data, count, error } = await supabase
      .from('blogs')
      .select('id, title, slug, description, image, date_posted, author', { count: 'exact' })
      .order('date_posted', { ascending: false })
      .range(from, to);

    if (error) {
      console.error('Supabase blogs error:', error);
      return { data: [], count: 0 };
    }

    return { data: data || [], count: count || 0 };
  } catch (err) {
    console.error('Unexpected error fetching blogs:', err);
    return { data: [], count: 0 };
  }
}

export default async function BlogPage(props) {
  const searchParams = await props.searchParams;
  const page = Number(searchParams?.page) || 1;
  const limit = 12;

  const { data: blogs, count } = await getBlogs(page, limit);
  const totalPages = Math.ceil(count / limit);

  const breadcrumbSchema = breadcrumbList([
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' }
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: stringifySchema(breadcrumbSchema) }}
      />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Hero Section */}
        <header className="text-center mb-12 lg:mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight mb-5">
            Printer Support Blog
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Practical troubleshooting guides, setup tutorials, driver fixes and expert tips to solve
            your printer problems quickly.
          </p>
        </header>

        {/* Quick CTA Banner */}
        <div className="mb-12 lg:mb-16 p-6 sm:p-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl text-white shadow-xl text-center">
          <p className="text-lg sm:text-xl font-semibold mb-4">
            Need your printer fixed right now?
          </p>
          <Link
            href="tel:+18887694448"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-700 font-bold text-lg rounded-xl shadow-2xl hover:bg-gray-50 hover:scale-105 transition-all duration-300"
          >
            Call for Fast Help: +1-888-769-4448 →
          </Link>
        </div>

        {/* Blog Posts – streamed with Suspense */}
        <Suspense
          key={page}
          fallback={
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-pulse">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-white rounded-xl shadow p-6">
                  <div className="h-48 bg-gray-200 rounded-lg mb-4"></div>
                  <div className="h-8 w-4/5 bg-gray-200 rounded mb-3"></div>
                  <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                </div>
              ))}
            </div>
          }
        >
          <BlogListClient blogs={blogs} />
        </Suspense>

        {/* Pagination */}
        <Pagination
          currentPage={page}
          totalPages={totalPages}
          basePath="/blog"
        />
        <div className="mt-10 text-gray-700 max-w-3xl">
          <p>
            📞 Need immediate help? Call <strong>+1-888-769-4448</strong> and get fast,
            reliable printer support from ZamZam Print experts.
          </p>
        </div>
      </main>

    </div>
  );
}
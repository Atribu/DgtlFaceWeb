// app/[locale]/blogs/components/BlogGridSection.jsx
import React from 'react';
import Link from 'next/link';

const BlogGridSection = ({ blogs = [], locale }) => {
  const featured = blogs[0];
  const mediumBlogs = blogs.slice(1, 3);
  const smallBlogs = blogs.slice(3);

  return (
    <section className="max-w-7xl mx-auto px-4 py-12 space-y-12">

      {/* 1. Üstte tek büyük kart */}
      {featured && (
        <div className="grid grid-cols-1">
          <div className="bg-white p-6 rounded-lg shadow flex flex-col md:flex-row gap-6">
            {/* İstersen buraya image alanı da ekleyebiliriz */}
            <div className="flex-1">
              <p className="text-xs uppercase tracking-wide text-gray-500 mb-2">
                {featured.date} • {featured.readTime}
              </p>
              <h2 className="text-2xl md:text-3xl font-semibold mb-3">
                {featured.title}
              </h2>
              <p className="text-gray-700 mb-4">
                {featured.excerpt}
              </p>
              <Link
                href={`/${locale}/blogs/${featured.slug}`}
                className="inline-flex items-center text-sm font-medium underline"
              >
                {featured.readMoreLabel || 'Read more'}
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* 2. Orta bölüm: 2 sütunlu büyük kartlar */}
      {mediumBlogs.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {mediumBlogs.map((blog) => (
            <div
              key={blog.slug}
              className="bg-white p-6 rounded-lg shadow flex flex-col"
            >
              <p className="text-xs uppercase tracking-wide text-gray-500 mb-2">
                {blog.date} • {blog.readTime}
              </p>
              <h3 className="text-xl font-semibold mb-2">
                {blog.title}
              </h3>
              <p className="text-gray-700 mb-4 line-clamp-3">
                {blog.excerpt}
              </p>
              <div className="mt-auto">
                <Link
                  href={`/${locale}/blogs/${blog.slug}`}
                  className="inline-flex items-center text-sm font-medium underline"
                >
                  {blog.readMoreLabel || 'Read more'}
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* 3. Alt bölüm: 3 sütunlu küçük kartlar */}
      {smallBlogs.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {smallBlogs.map((blog) => (
            <div
              key={blog.slug}
              className="bg-white p-4 rounded-lg shadow text-sm flex flex-col"
            >
              <p className="text-[11px] uppercase tracking-wide text-gray-500 mb-1">
                {blog.date}
              </p>
              <h4 className="font-semibold mb-2 line-clamp-2">
                {blog.title}
              </h4>
              <p className="text-gray-700 mb-3 line-clamp-3">
                {blog.excerpt}
              </p>
              <div className="mt-auto">
                <Link
                  href={`/${locale}/blogs/${blog.slug}`}
                  className="inline-flex items-center text-xs font-medium underline"
                >
                  {blog.readMoreLabel || 'Read more'}
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* 4. Load More + Pagination (şimdilik dummy) */}
      <div className="flex flex-col items-center space-y-4">
        <button className="px-6 py-2 border-2 rounded-md text-sm">
          Load more articles
        </button>
        <div className="flex space-x-2">
          <button className="w-8 h-8 border rounded">1</button>
          <button className="w-8 h-8 border rounded bg-gradient-to-r from-[#a754cf] to-[#547dcf] text-white">
            2
          </button>
          <button className="w-8 h-8 border rounded">3</button>
          <button className="w-8 h-8 border rounded">…</button>
          <button className="w-8 h-8 border rounded">10</button>
        </div>
      </div>
    </section>
  );
};

export default BlogGridSection;

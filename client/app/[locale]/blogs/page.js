// app/[locale]/blogs/page.js
import React from 'react';
import {getTranslations} from 'next-intl/server';
import BlogBanner from './components/BlogBanner';
import BlogGridSection from './components/BlogGridSection';

const BLOG_SLUGS = [
  'what-is-travertine',
  'travertine-vs-marble',
  'travertine-maintenance-tips',
  'travertine-pool-ideas',
  // vs...
];

export default async function Page({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: 'blogs' });

  const blogs = BLOG_SLUGS.map((slug) => ({
    slug,
    title: t(`${slug}.title`),
    excerpt: t(`${slug}.excerpt`),
    date: t(`${slug}.date`),
    readTime: t(`${slug}.readTime`),
    readMoreLabel: t('readMore'), // genel label
    // İstersen burada image, category vs. de çekebilirsin
    // image: t(`${slug}.image`), ...
  }));

  return (
    <div className="min-h-[100vh] flex flex-col bg-[#FBFBFD] overflow-hidden lg:mt-20">
      <BlogBanner />
      <BlogGridSection blogs={blogs} locale={locale} />
    </div>
  );
}

import BlogsPageClient from "./BlogsPageClient";
import { getBlogPostSummaries } from "@/app/lib/get-blog-posts";

export default async function BlogPage({ params }) {
  const { locale } = await params;
  const blogSummaries = await getBlogPostSummaries(locale);

  return <BlogsPageClient initialBlogSummaries={blogSummaries} />;
}

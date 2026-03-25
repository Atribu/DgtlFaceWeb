import BlogsPageClient from "./BlogsPageClient";
import { getBlogPosts } from "@/app/lib/get-blog-posts";

export default async function BlogPage({ params }) {
  const { locale } = await params;
  const blogPosts = await getBlogPosts(locale);

  return <BlogsPageClient initialBlogPosts={blogPosts} />;
}

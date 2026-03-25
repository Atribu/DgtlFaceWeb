import DeptBlogListingClient from "./DeptBlogListingClient";
import { getBlogPosts } from "@/app/lib/get-blog-posts";

export default async function Page({ params }) {
  const { locale, segment } = await params; // smm, seo, sem...
  const blogPosts = await getBlogPosts(locale);

  return <DeptBlogListingClient initialBlogPosts={blogPosts} segment={segment} />;
}

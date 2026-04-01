import DeptBlogListingClient from "./DeptBlogListingClient";
import { getBlogPostSummaries } from "@/app/lib/get-blog-posts";

export default async function Page({ params }) {
  const { locale, segment } = await params; // smm, seo, sem...
  const blogSummaries = await getBlogPostSummaries(locale, { segment });

  return (
    <DeptBlogListingClient
      initialBlogSummaries={blogSummaries}
      segment={segment}
    />
  );
}

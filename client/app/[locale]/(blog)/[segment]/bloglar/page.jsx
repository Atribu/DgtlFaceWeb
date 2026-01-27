import DeptBlogListingClient from "./DeptBlogListingClient";

export default function Page({ params }) {
  const { segment } = params; // smm, seo, sem...
  return <DeptBlogListingClient segment={segment} />;
}

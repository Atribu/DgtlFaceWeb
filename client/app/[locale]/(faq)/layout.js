import { setRequestLocale } from "next-intl/server";

export default async function FaqGroupLayout({ children, params }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return children;
}

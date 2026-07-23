import RouteIntlProvider, {
  loadBlogClientMessages,
} from "../components/common/RouteIntlProvider";

export default async function BlogsPageLayout({ children, params }) {
  const { locale } = await params;
  const messages = await loadBlogClientMessages(locale);

  return (
    <RouteIntlProvider locale={locale} messages={messages}>
      {children}
    </RouteIntlProvider>
  );
}

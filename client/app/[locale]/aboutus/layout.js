import RouteIntlProvider, {
  loadAboutClientMessages,
} from "../components/common/RouteIntlProvider";

export default async function AboutLayout({ children, params }) {
  const { locale } = await params;
  const messages = await loadAboutClientMessages(locale);

  return (
    <RouteIntlProvider locale={locale} messages={messages}>
      {children}
    </RouteIntlProvider>
  );
}

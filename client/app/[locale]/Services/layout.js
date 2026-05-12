import RouteIntlProvider, {
  loadDefaultRouteClientMessages,
} from "../components/common/RouteIntlProvider";

export default async function ServicesLayout({ children, params }) {
  const { locale } = await params;
  const messages = await loadDefaultRouteClientMessages(locale);

  return (
    <RouteIntlProvider locale={locale} messages={messages}>
      {children}
    </RouteIntlProvider>
  );
}

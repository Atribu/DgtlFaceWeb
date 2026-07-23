import RouteIntlProvider, {
  loadContactClientMessages,
} from "../components/common/RouteIntlProvider";

export default async function ContactLayout({ children, params }) {
  const { locale } = await params;
  const messages = await loadContactClientMessages(locale);

  return (
    <RouteIntlProvider locale={locale} messages={messages}>
      {children}
    </RouteIntlProvider>
  );
}

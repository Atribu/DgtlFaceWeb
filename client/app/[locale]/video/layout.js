import RouteIntlProvider, {
  loadVideoClientMessages,
} from "../components/common/RouteIntlProvider";

export default async function VideoLayout({ children, params }) {
  const { locale } = await params;
  const messages = await loadVideoClientMessages(locale);

  return (
    <RouteIntlProvider locale={locale} messages={messages}>
      {children}
    </RouteIntlProvider>
  );
}

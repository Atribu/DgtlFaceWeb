import { setRequestLocale } from "next-intl/server";
import RouteIntlProvider, {
  loadFaqClientMessages,
} from "../components/common/RouteIntlProvider";

export default async function FaqGroupLayout({ children, params }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const messages = await loadFaqClientMessages(locale);

  return (
    <RouteIntlProvider locale={locale} messages={messages}>
      {children}
    </RouteIntlProvider>
  );
}

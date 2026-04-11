import React from "react";
import TemporaryNoticePage from "../components/common/TemporaryNoticePage.jsx";

const COPY = {
  tr: {
    title: "Gizlilik Politikasi",
    eyebrow: "Gecici Bilgilendirme",
    description:
      "Bu sayfa su anda guncellenmektedir. Gizlilik politikasi icerigi yeniden duzenleniyor ve cok yakinda yayinlanacak.",
    statusTitle: "Guncelleme Durumu",
    statusText:
      "Sitedeki icerik ve yasal metinler yeni yapimiza uygun olacak sekilde gozden gecirilmektedir. Bu nedenle bu sayfa gecici olarak sade bir bilgilendirme alani olarak yayinlanmistir.",
    supportTitle: "Bu Sirada",
    supportText:
      "Acil bir gizlilik, veri isleme veya iletisim konusu varsa ekibimizle iletisime gecebilirsiniz. Guncel bilgilendirme paylasilmaya devam edecektir.",
    primaryCtaLabel: "Iletisime Gec",
    secondaryCtaLabel: "Hizmetlere Don",
    homeLabel: "Ana Sayfa",
    metadataTitle: "Gizlilik Politikasi | DGTLFACE",
    metadataDescription:
      "DGTLFACE gizlilik politikasi sayfasi guncellenmektedir. Gecici bilgilendirme sayfasi.",
  },
  en: {
    title: "Privacy Policy",
    eyebrow: "Temporary Notice",
    description:
      "This page is currently being refreshed. The privacy policy content is being updated and will be published soon.",
    statusTitle: "Update Status",
    statusText:
      "We are reviewing our legal content so it matches the current structure of the site. For now, this page is intentionally kept as a temporary notice page.",
    supportTitle: "In The Meantime",
    supportText:
      "If you need urgent information about privacy, data handling or communication, please contact our team and we will help you directly.",
    primaryCtaLabel: "Contact Us",
    secondaryCtaLabel: "Back To Services",
    homeLabel: "Home",
    metadataTitle: "Privacy Policy | DGTLFACE",
    metadataDescription:
      "The DGTLFACE privacy policy page is currently being updated. Temporary information page.",
  },
};

export async function generateMetadata({ params }) {
  const locale = params?.locale === "en" ? "en" : "tr";
  const copy = COPY[locale];

  return {
    title: copy.metadataTitle,
    description: copy.metadataDescription,
  };
}

export default function Page({ params }) {
  const locale = params?.locale === "en" ? "en" : "tr";
  const copy = COPY[locale];

  return <TemporaryNoticePage {...copy} />;
}

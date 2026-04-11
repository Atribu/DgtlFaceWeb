import React from "react";
import TemporaryNoticePage from "../components/common/TemporaryNoticePage.jsx";

const COPY = {
  tr: {
    title: "Kullanim Kosullari",
    eyebrow: "Gecici Bilgilendirme",
    description:
      "Bu sayfa su anda yenilenmektedir. Kullanim kosullari ve ilgili yasal icerik yakinda guncel haliyle yayinda olacaktir.",
    statusTitle: "Guncelleme Durumu",
    statusText:
      "Sitedeki kullanim kosullari metni yeniden duzenlenmekte ve mevcut hizmet yapisina gore guncellenmektedir. Bu surecte gecici bir bilgilendirme sayfasi gosteriyoruz.",
    supportTitle: "Destek Ihtiyaci",
    supportText:
      "Acil bir konu varsa bizimle iletisime gecebilirsiniz. Tam metin yayinlanana kadar gerekli yonlendirmeyi ekibimiz saglayacaktir.",
    primaryCtaLabel: "Iletisime Gec",
    secondaryCtaLabel: "Hizmetlere Don",
    homeLabel: "Ana Sayfa",
    metadataTitle: "Kullanim Kosullari | DGTLFACE",
    metadataDescription:
      "DGTLFACE kullanim kosullari sayfasi guncellenmektedir. Gecici bilgilendirme sayfasi.",
  },
  en: {
    title: "Terms of Service",
    eyebrow: "Temporary Notice",
    description:
      "This page is currently being updated. The terms of service content will be published in its refreshed form soon.",
    statusTitle: "Update Status",
    statusText:
      "We are revising the legal text so it reflects the current structure and scope of the website. Until then, this page remains a temporary notice page.",
    supportTitle: "Need Help?",
    supportText:
      "If you need urgent clarification, please contact our team. We can guide you while the updated legal page is being prepared.",
    primaryCtaLabel: "Contact Us",
    secondaryCtaLabel: "Back To Services",
    homeLabel: "Home",
    metadataTitle: "Terms of Service | DGTLFACE",
    metadataDescription:
      "The DGTLFACE terms of service page is currently being updated. Temporary information page.",
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

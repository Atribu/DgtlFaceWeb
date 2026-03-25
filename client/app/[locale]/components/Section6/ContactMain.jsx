import Image from "next/image";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import ContactMainFormsLoader from "./ContactMainFormsLoader";

const mapsShareUrl = "https://maps.app.goo.gl/6G4bEbkoA5BH1DD79";

async function ContactMain() {
  const t = await getTranslations("Homepage.contact");

  return (
    <div className="flex flex-col lg:flex-row lg:gap-8 items-center justify-center mt-6 lg:mt-12 mb-3 lg:mb-6">
      <div className="flex flex-col xl:w-[480px] items-center justify-center">
        <div className="flex flex-row lg:flex-col gap-4 justify-center items-start">
          <Link
            href="tel:+905326451767"
            className="flex flex-col lg:flex-row items-center gap-4"
          >
            <Image
              src="/gifs/phone.gif"
              alt="Phone GIF"
              width={36}
              height={36}
            />
            <p className="flex text-darkBlue lg:hidden">Phone</p>
            <div className="hidden lg:flex flex-col">
              <span className="text-[#140f25] text-sm font-normal font-inter leading-snug text-start">
                {t("contact_call_now")}
              </span>
              <p className="text-[#140f25] text-xl font-bold font-['Inter'] leading-tight hover:text-[#54b9cf]">
                0 532 645 17 67
              </p>
            </div>
          </Link>

          <Link
            href="mailto:info@dgtlface.com"
            className="flex flex-col lg:flex-row items-center gap-4"
          >
            <Image
              src="/gifs/email.gif"
              alt="email GIF"
              width={36}
              height={36}
            />
            <p className="flex lg:hidden text-darkBlue">Mail</p>
            <div className="hidden lg:flex flex-col">
              <span className="text-[#140f25] text-sm font-normal font-['Inter'] leading-snug text-start">
                {t("contact_email_text")}
              </span>
              <p className="text-[#140f25] text-xl font-bold font-['Inter'] leading-tight hover:text-[#54b9cf]">
                info@dgtlface.com
              </p>
            </div>
          </Link>

          <Link
            href={mapsShareUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col lg:flex-row items-center gap-4"
          >
            <Image
              src="/gifs/location.gif"
              alt="location GIF"
              width={36}
              height={36}
            />
            <p className="flex lg:hidden text-darkBlue">Address</p>
            <div className="hidden lg:flex flex-col">
              <span className="text-[#140f25] text-sm font-normal font-['Inter'] leading-snug text-start">
                {t("contact_location_text")}
              </span>
              <p className="text-[#140f25] text-xl font-bold font-['Inter'] leading-tight hover:text-[#54b9cf]">
                Muratpaşa / Antalya
              </p>
            </div>
          </Link>
        </div>
      </div>

      <ContactMainFormsLoader />
    </div>
  );
}

export default ContactMain;

"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useTranslations } from 'next-intl';

const ContactMain = () => {
   const t = useTranslations("Homepage.contact")
   
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    projectType: "",
    phone: "",
    email: "",
    additionalInfo1: "",
    additionalInfo2: "",
  });

  const [formMobile, setFormMobile] = useState({
    name: "",
    phone: "",
    message: "",
    policyAccepted: false,
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  // Input alanları için genel değişim handler'ı
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Mobil input değişim handler'ı
  const handleMobileChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormMobile({
      ...formMobile,
      [e.target.name]: e.target.value,
    });
  };

  // Form gönderim işlemi
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      // Mesaj içeriğini orijinal formata uygun şekilde oluşturma
      const message = `
       ${t("contact_hello_name")} ${formData.firstName} ${formData.lastName}
        ${t("contact_i_work_at")} ${formData.company}  ${t("contact_compoany_suffix")}.
        ${t("contact_")} ${formData.projectType}
        ${formData.additionalInfo1}
        ${t("contact_for_communication")} ${formData.phone}, ${formData.email}
         ${t("contact_in_addition")} ${formData.additionalInfo2}
        ${t("contact_we_thank_you")}
      `;

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.firstName,
          surname: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          message: message,
        }),
      });

      if (!response.ok) {
        throw new Error(`{t("error_submission_failed")}`);
      }

      setSuccess(true);
      // Formu temizle
      setFormData({
        firstName: "",
        lastName: "",
        company: "",
        projectType: "",
        phone: "",
        email: "",
        additionalInfo1: "",
        additionalInfo2: "",
      });
    } catch (err) {
      setError(err.message || t("error_generic"));
    } finally {
      setLoading(false);
    }
  };

  // Mobil form gönderim işlemi
  const handleMobileSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      // Policy kontrolü
      if (!formMobile.policyAccepted) {
        throw new Error(`{t("error_accept_policy")}`);
      }

      // Mobil mesaj formatı
      const message = `
       ${t("contact_hello_name")} ${formMobile.name}
        ${t("contact_for_communication")} ${formMobile.phone}
      ${t("contact_mobile_label_message")} ${formMobile.message}
      ${t("contact_we_thank_you")}
    `;

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formMobile.name.split(" ")[0] || "",
          surname: formMobile.name.split(" ")[1] || "",
          email: "", // Mobilde email yok
          phone: formMobile.phone,
          message: message,
        }),
      });

      if (!response.ok) {
        throw new Error("Gönderim başarısız oldu");
      }

      setSuccess(true);
      // Mobil formu temizle
      setFormMobile({
        name: "",
        phone: "",
        message: "",
        policyAccepted: false,
      });
    } catch (err) {
      setError(err.message || "Bir hata oluştu, lütfen tekrar deneyin");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row lg:gap-12 mt-0 mb-12 items-center justify-center">
      <div className="flex flex-col xl:w-[620px] items-center justify-center">
        <div className="flex flex-row lg:flex-col gap-6 justify-center items-start">
          {/* Telefon */}
          <Link
            href="tel:+905326451767"
            className="flex flex-col lg:flex-row items-center gap-6"
          >
            {/* GIF için .gif uzantılı bir dosya kullanabilirsiniz. */}
            <Image
              src="/gifs/phone.gif"
              alt="Phone GIF"
              width={48}
              height={48}
            />
            <p className="flex text-darkBlue lg:hidden">Phone</p>
            <div className="hidden lg:flex flex-col">
              <span className="text-[#140f25] text-base font-normal font-inter leading-snug text-start">
                {t("contact_call_now")}
              </span>
              <p className="text-[#140f25] text-2xl font-bold font-['Inter'] leading-[28.80px]">
                0 532 645 17 67
              </p>
            </div>
          </Link>

          {/* E-Posta */}
          <div className="flex flex-col lg:flex-row items-center gap-6">
            <Image
              src="/gifs/email.gif"
              alt="email GIF"
              width={48}
              height={48}
            />
            <p className="flex lg:hidden text-darkBlue">Mail</p>
            <div className="hidden lg:flex flex-col">
              <span className="text-[#140f25] text-base font-normal font-['Inter'] leading-snug text-start">
                 {t("contact_email_text")}
              </span>
              <p className="text-[#140f25] text-2xl font-bold font-['Inter'] leading-[28.80px]">
                info@dgtlface.com
              </p>
            </div>
          </div>

          {/* Konum */}
          <Link
            href="/contact"
            className="flex flex-col lg:flex-row items-center gap-6">
            <Image
              src="/gifs/location.gif"
              alt="location GIF"
              width={48}
              height={48}
            />
            <p className="flex lg:hidden text-darkBlue">Address</p>
            <div className="hidden lg:flex flex-col">
              <span className="text-[#140f25] text-base font-normal font-['Inter'] leading-snug text-start">
                   {t("contact_location_text")}
              </span>
              <p className="text-[#140f25] text-2xl font-bold font-['Inter'] leading-[28.80px]">
                Muratpaşa / Antalya
              </p>
            </div>
          </Link>
        </div>
      </div>
      <div>
        <form
          onSubmit={handleSubmit}
          className="hidden lg:inline-flex w-[620px] p-12 bg-white rounded-[25px] shadow-[-15px_30px_150px_0px_rgba(20,12,41,0.05)] flex-col justify-start items-center gap-12"
        >
          <div className="relative justify-center text-[#140f25] text-[32px] font-bold font-['Inter'] leading-[38.40px]">
            {t("contact_send_message")}
          </div>

          <div className="flex flex-col justify-start items-start gap-4 whitespace-nowrap">
            {/* Name Section */}
            <div className="inline-flex justify-start items-center gap-5">
              <div className="text-[#140f25] text-2xl font-medium font-['Inter'] leading-[28.80px]">
               {t("contact_hello_name")}
              </div>
              <div className="flex gap-2">
                <input
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="................................................................................."
                  className="w-[100%] h-6 px-2 bg-transparent text-[#54b9cf] text-2xl focus:outline-none placeholder-[#54b9cf]"
                />
                <input
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="................................................................................."
                  className="w-[100%] h-6 px-2 bg-transparent text-[#54b9cf] text-2xl focus:outline-none placeholder-[#54b9cf]"
                />
              </div>
            </div>

            {/* Company Section */}
            <div className="inline-flex justify-start items-center gap-5">
              <div className="text-[#140f25] text-2xl font-medium font-['Inter'] leading-[28.80px]">
              {t("contact_i_work_at")}
              </div>
              <input
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="................................................................................."
                className="w-[100%] h-6 px-2 bg-transparent text-[#54b9cf] text-2xl focus:outline-none placeholder-[#54b9cf]"
              />
              <div className="text-[#140f25] text-2xl font-medium font-['Inter'] leading-[28.80px]">
                 {t("contact_company_suffix")}.
              </div>
            </div>

            {/* Project Type */}
            <div className="inline-flex justify-start items-center gap-5">
              <div className="text-[#140f25] text-2xl font-medium font-['Inter'] leading-[28.80px]">
                {t("contact_project_request")}.
              </div>
              <input
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                placeholder="................................................................................."
                className="w-[100%] h-6 px-2 bg-transparent text-[#54b9cf] text-2xl focus:outline-none placeholder-[#54b9cf]"
              />
            </div>

            {/* Additional Info 1 */}
            <input
              name="additionalInfo1"
              value={formData.additionalInfo1}
              onChange={handleChange}
              placeholder="................................................................................."
              className="w-[100%] h-6 px-2  bg-transparent text-[#54b9cf] text-2xl focus:outline-none placeholder-[#54b9cf]"
            />

            {/* Contact Info */}
            <div className="inline-flex justify-start items-center gap-5">
              <div className="text-[#140f25] text-2xl font-medium font-['Inter'] leading-[28.80px]">
                {t("contact_for_communication")}
              </div>
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+........(....)........... ....... ....... ..............."
                className="w-[100%] h-6 bg-transparent text-[#54b9cf] text-2xl focus:outline-none placeholder-[#54b9cf]"
              />
            </div>

            {/* Additional Info 2 */}
            <div className="inline-flex justify-start items-center gap-5">
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="................................................................................."
                className="w-[100%] h-6 px-2 bg-transparent text-[#54b9cf] text-2xl focus:outline-none placeholder-[#54b9cf]"
              />
              <div className="text-[#140f25] text-2xl font-medium font-['Inter'] leading-[28.80px]">
               {t("contact_in_addition")}
              </div>
            </div>

            {/* Final Line */}
            <input
              name="additionalInfo2"
              value={formData.additionalInfo2}
              onChange={handleChange}
              placeholder="................................................................................."
              className="w-[100%] h-6 relative justify-end text-[#54b9cf] text-2xl font-medium font-['Inter'] leading-[28.80px] border-[#54b9cf] bg-transparent  focus:outline-none placeholder-[#54b9cf]"
            />

            <div className="text-[#140f25] text-2xl font-medium font-['Inter'] leading-[28.80px]">
              {t("contact_we_thank_you")}
            </div>
          </div>

          {/* <button
        type="submit"
        className="px-8 py-4 rounded-[14px] border gradient-border-button inline-flex justify-center items-center gap-2.5 hover:bg-[#54b9cf] hover:text-white transition-colors"
      >
        <p className="text-[#140f25] text-sm font-bold font-['Inter'] leading-[16.80px]">
          Send
        </p>
      </button> */}

          {success && (
            <div className="text-green-600 text-lg">
             {t("success_message_sent")}
            </div>
          )}

          {error && <div className="text-red-600 text-lg">{error}</div>}

          <button
            type="submit"
            disabled={loading}
            className={`px-8 py-4 rounded-[14px] inline-flex justify-center items-center gap-2.5 gradient-border-button hover:bg-[#54b9cf] !hover:text-white !text-darkBlue ${
              loading
                ? "opacity-50 cursor-not-allowed hover:bg-[#54b9cf] hover:text-white"
                : "hover:bg-[#54b9cf] hover:text-white"
            } transition-colors`}
          >
            {loading ? (
              <div className=" text-sm font-bold font-['Inter'] leading-[16.80px]">
               {t("contact_button_sending")}
              </div>
            ) : (
              <div className=" text-sm  font-bold font-['Inter'] leading-[16.80px]  ">
                {t("contact_button_send")}
              </div>
            )}
          </button>
        </form>

        {/* Mobile Form */}
        <div className="flex lg:hidden w-[100%] py-[18px] px-[15px] bg-white items-center justify-center">
          <form
            onSubmit={handleMobileSubmit}
            className="flex flex-col w-full items-center justify-center text-start gap-[18px] text-darkBlue font-inter"
          >
            <h5 className="text-[24px] -tracking-[0.48px] font-bold leading-[120%] whitespace-nowrap">
              {t("contact_mobile_send_message")}
            </h5>
            <div className="flex flex-col gap-[11px] w-full">
              <label className="block text-[14px] font-bold leading-[120%] -tracking-[0.28px]">
                  {t("contact_mobile_label_name")}
              </label>
              <input
                type="text"
                name="name"
                value={formMobile.name}
                onChange={handleMobileChange}
                placeholder="Your Name"
                className="w-full px-[20px] py-[10px] bg-transparent border-dotted border rounded-[10px] border-[#54B9CF] outline-none placeholder:text-[14px] placeholder:text-darkBlue placeholder:font-semibold"
              />
            </div>

            <div className="flex flex-col gap-[11px] w-full">
              <label className="block text-[14px] font-bold leading-[120%] -tracking-[0.28px]">
                {t("contact_mobile_label_phone")}
              </label>
              <input
                name="phone"
                value={formMobile.phone}
                onChange={handleMobileChange}
                placeholder="+....... ( ............ ) ......................................"
                className="w-full py-[10px] bg-transparent border-dotted border rounded-[10px]  border-[#54B9CF] outline-none placeholder:text-[14px] placeholder:text-darkBlue placeholder:font-semibold"
              />
            </div>

            <div className="flex flex-col gap-[11px] w-full">
              <label className="block text-[14px] font-bold leading-[120%] -tracking-[0.28px]">
                {t("contact_mobile_label_message")}
              </label>
              <input
                type="text"
                name="message"
                value={formMobile.message}
                onChange={handleMobileChange}
                placeholder=""
                className="w-full px-[20px] py-[10px] bg-transparent !border-dotted rounded-[10px] border border-[#54B9CF] outline-none placeholder:text-[14px] placeholder:text-darkBlue placeholder:font-semibold"
              />
            </div>

            <div className="flex items-center justify-start gap-[17px] w-full">
              <input
                type="checkbox"
                name="policyAccepted"
                checked={formMobile.policyAccepted}
                onChange={handleMobileChange}
                className="w-[20px] h-[20px] items-center justify-center text-center appearance-none border border-[#152741] bg-transparent focus:outline-none
               checked:after:content-['✓']  checked:after:text-darkBlue checked:after:text-[16px]
               checked:after:flex checked:after:items-center checked:after:justify-center "
              />
              <label className="text-[16px] font-normal leading-[26.667px] text-[#152741] cursor-pointer underline ">
              {t("contact_mobile_policy")}
              </label>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full min-w-[330px] gradient-border-button bg-white border text-[14px] -tracking-[0.28px] leading-[120%] font-bold !text-darkBlue py-[16px] px-[32px] min-h-[42px]"
            >
              {loading ? "Gönderiliyor..." : "Send"}
            </button>
            {/* <button className="w-full min-w-[330px] gradient-border-button bg-white border text-[14px] -tracking-[0.28px] leading-[120%] font-bold !text-darkBlue py-[16px] px-[32px] min-h-[42px]">
              Send
            </button> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactMain;

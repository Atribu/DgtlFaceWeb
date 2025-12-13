"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useTranslations } from 'next-intl';

const ContactMain = () => {
   const t = useTranslations("Homepage.contact")
   const mapsShareUrl = "https://maps.app.goo.gl/6G4bEbkoA5BH1DD79";
   
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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleMobileChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormMobile({
      ...formMobile,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
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
        throw new Error(`${t("error_submission_failed")}`);
      }

      setSuccess(true);
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

  const handleMobileSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      if (!formMobile.policyAccepted) {
        throw new Error(`${t("error_accept_policy")}`);
      }

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
          email: "", 
          phone: formMobile.phone,
          message: message,
        }),
      });

      if (!response.ok) {
        throw new Error("Gönderim başarısız oldu");
      }

      setSuccess(true);
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
    <div className="flex flex-col lg:flex-row lg:gap-8 items-center justify-center">
      
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

          <div className="flex flex-col lg:flex-row items-center gap-4">
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
              <Link href="mailto:info@dgtlface.com" className="text-[#140f25] text-xl font-bold font-['Inter'] leading-tight hover:text-[#54b9cf]">
                info@dgtlface.com
              </Link>
            </div>
          </div>

          <Link
           href={mapsShareUrl}
  target="_blank"
  rel="noopener noreferrer"

            className="flex flex-col lg:flex-row items-center gap-4">
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
      
      <div>
        <form
          onSubmit={handleSubmit}
          className="hidden lg:inline-flex w-[500px] p-6 bg-white rounded-[25px] shadow-[-15px_30px_150px_0px_rgba(20,12,41,0.05)] flex-col justify-start items-center gap-6"
        >
          <div className="relative justify-center text-[#140f25] text-[24px] font-bold font-['Inter'] leading-normal">
            {t("contact_send_message")}
          </div>

          <div className="flex flex-col justify-start items-start gap-3 whitespace-nowrap">
            
            <div className="inline-flex justify-start items-center gap-5">
              <div className="text-[#140f25] text-lg font-medium font-['Inter'] leading-snug">
               {t("contact_hello_name")}
              </div>
              <div className="flex gap-2">
                <input
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="..............................."
                  className="w-[100%] h-6 px-2 bg-transparent text-[#54b9cf] text-lg focus:outline-none placeholder-[#54b9cf]"
                />
                <input
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="..............................."
                  className="w-[100%] h-6 px-2 bg-transparent text-[#54b9cf] text-lg focus:outline-none placeholder-[#54b9cf]"
                />
              </div>
            </div>

            <div className="inline-flex justify-start items-center gap-5">
              <div className="text-[#140f25] text-lg font-medium font-['Inter'] leading-snug">
              {t("contact_i_work_at")}
              </div>
              <input
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="..............................."
                className="w-[100%] h-6 px-2 bg-transparent text-[#54b9cf] text-lg focus:outline-none placeholder-[#54b9cf]"
              />
              <div className="text-[#140f25] text-lg font-medium font-['Inter'] leading-snug">
                 {t("contact_company_suffix")}.
              </div>
            </div>

            <div className="inline-flex justify-start items-center gap-5">
              <div className="text-[#140f25] text-lg font-medium font-['Inter'] leading-snug">
                {t("contact_project_request")}.
              </div>
              <input
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                placeholder="..............................."
                className="w-[100%] h-6 px-2 bg-transparent text-[#54b9cf] text-lg focus:outline-none placeholder-[#54b9cf]"
              />
            </div>

            <input
              name="additionalInfo1"
              value={formData.additionalInfo1}
              onChange={handleChange}
              placeholder="..................................................................."
              className="w-[100%] h-6 px-2  bg-transparent text-[#54b9cf] text-lg focus:outline-none placeholder-[#54b9cf]"
            />

            <div className="inline-flex justify-start items-center gap-5">
              <div className="text-[#140f25] text-lg font-medium font-['Inter'] leading-snug">
                {t("contact_for_communication")}
              </div>
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+........(....)........... ......."
                className="w-[100%] h-6 bg-transparent text-[#54b9cf] text-lg focus:outline-none placeholder-[#54b9cf]"
              />
            </div>

            <div className="inline-flex justify-start items-center gap-5">
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="..............................."
                className="w-[100%] h-6 px-2 bg-transparent text-[#54b9cf] text-lg focus:outline-none placeholder-[#54b9cf]"
              />
              <div className="text-[#140f25] text-lg font-medium font-['Inter'] leading-snug">
               {t("contact_in_addition")}
              </div>
            </div>

            <input
              name="additionalInfo2"
              value={formData.additionalInfo2}
              onChange={handleChange}
              placeholder="..................................................................."
              className="w-[100%] h-6 relative justify-end text-[#54b9cf] text-lg font-medium font-['Inter'] leading-snug border-[#54b9cf] bg-transparent  focus:outline-none placeholder-[#54b9cf]"
            />

            <div className="text-[#140f25] text-lg font-medium font-['Inter'] leading-snug">
              {t("contact_we_thank_you")}
            </div>
          </div>

          {success && (
            <div className="text-green-600 text-lg">
             {t("success_message_sent")}
            </div>
          )}

          {error && <div className="text-red-600 text-lg">{error}</div>}

          <button
            type="submit"
            disabled={loading}
            className={`px-6 py-3 rounded-[12px] inline-flex justify-center items-center gap-2.5 gradient-border-button hover:bg-[#54b9cf] !hover:text-white !text-darkBlue ${
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

        <div className="flex lg:hidden w-[100%] py-4 px-3 bg-white items-center justify-center">
          <form
            onSubmit={handleMobileSubmit}
            className="flex flex-col w-full items-center justify-center text-start gap-4 text-darkBlue font-inter"
          >
            <h5 className="text-[20px] -tracking-[0.48px] font-bold leading-[120%] whitespace-nowrap">
              {t("contact_mobile_send_message")}
            </h5>
            <div className="flex flex-col gap-2 w-full">
              <label className="block text-sm font-bold leading-[120%] -tracking-[0.28px]">
                  {t("contact_mobile_label_name")}
              </label>
              <input
                type="text"
                name="name"
                value={formMobile.name}
                onChange={handleMobileChange}
                placeholder="Your Name"
                className="w-full px-[20px] py-2 bg-transparent border-dotted border rounded-[10px] border-[#54B9CF] outline-none placeholder:text-[14px] placeholder:text-darkBlue placeholder:font-semibold"
              />
            </div>

            <div className="flex flex-col gap-2 w-full">
              <label className="block text-sm font-bold leading-[120%] -tracking-[0.28px]">
                {t("contact_mobile_label_phone")}
              </label>
              <input
                name="phone"
                value={formMobile.phone}
                onChange={handleMobileChange}
                placeholder="+....... ( ............ ) ......................................"
                className="w-full py-2 bg-transparent border-dotted border rounded-[10px]  border-[#54B9CF] outline-none placeholder:text-[14px] placeholder:text-darkBlue placeholder:font-semibold"
              />
            </div>

            <div className="flex flex-col gap-2 w-full">
              <label className="block text-sm font-bold leading-[120%] -tracking-[0.28px]">
                {t("contact_mobile_label_message")}
              </label>
              <input
                type="text"
                name="message"
                value={formMobile.message}
                onChange={handleMobileChange}
                placeholder=""
                className="w-full px-[20px] py-2 bg-transparent !border-dotted rounded-[10px] border border-[#54B9CF] outline-none placeholder:text-[14px] placeholder:text-darkBlue placeholder:font-semibold"
              />
            </div>

            <div className="flex items-center justify-start gap-3 w-full">
              <input
                type="checkbox"
                name="policyAccepted"
                checked={formMobile.policyAccepted}
                onChange={handleMobileChange}
                className="w-[18px] h-[18px] items-center justify-center text-center appearance-none border border-[#152741] bg-transparent focus:outline-none
               checked:after:content-['✓']  checked:after:text-darkBlue checked:after:text-[16px]
               checked:after:flex checked:after:items-center checked:after:justify-center "
              />
              <label className="text-sm font-normal leading-normal text-[#152741] cursor-pointer underline ">
              {t("contact_mobile_policy")}
              </label>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full min-w-[330px] gradient-border-button bg-white border text-[14px] -tracking-[0.28px] leading-[120%] font-bold !text-darkBlue py-3 px-6 min-h-[42px]"
            >
              {loading ? "Gönderiliyor..." : "Send"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactMain;
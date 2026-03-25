"use client";

import dynamic from "next/dynamic";

const ContactMainFormsClient = dynamic(() => import("./ContactMainFormsClient"), {
  ssr: false,
  loading: () => (
    <div className="w-full lg:w-[500px] min-h-[420px] rounded-[25px] bg-white shadow-[-15px_30px_150px_0px_rgba(20,12,41,0.05)]" />
  ),
});

const ContactMainFormsLoader = () => <ContactMainFormsClient />;

export default ContactMainFormsLoader;

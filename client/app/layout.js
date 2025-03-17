import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import CookiePopup from "./components/Cookies/CookiePopup";
import Contact from "./components/Section6/ContactMain";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "DGTLFACE",
  description: "Dgtlface | Technology Partner",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <CookiePopup/>
        {children}
        <Contact />
        <Footer />
      </body>
    </html>
  );
}

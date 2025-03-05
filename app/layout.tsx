
import "./globals.css";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import { Metadata } from "next";

import { Urbanist } from "next/font/google";
import TopBar from "@/components/Topbar";
import CookieConsent from "@/components/CookieConsent";

const urbanist = Urbanist({
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Alergológ - MUDr. Marína Hantáková",
  description: "Ponúkame diagnostiku a liečbu alergií.",
  keywords: "alergológ, alergie, diagnostika, liečba alergií, zdravie",
  openGraph: {
    title: "Profesionálne služby alergológa",
    description: "Ponúkame diagnostiku a liečbu alergií",
    url: "https://lekia.sk/",
    siteName: "Alergológ",
    images: [
      {
        url: "/path-to-your-image.jpg", 
        width: 1200,
        height: 630,
        alt: "Alergológ klinika",
      },
    ],
  },
  twitter: {
    card: "summary_large_image", 
    title: "Alergológ - Profesionálne služby alergológa",
    description: "Ponúkame diagnostiku a liečbu alergií pre jednotlivcov a firmy.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sk">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className={urbanist.className}>
        <div className="min-h-screen flex flex-col bg-gradient-to-bl from-primary to-secondary">
          <CookieConsent />
          <TopBar />
          <Header /> 
          <main className="container flex-1 py-10 mt-[100px]">{children}</main> 
          <Footer /> 
        </div>
      </body>
    </html>
  );
}

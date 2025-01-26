
import "./globals.css";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import { Metadata } from "next";

import { Urbanist } from "next/font/google";
import TopBar from "@/components/Topbar";

const urbanist = Urbanist({
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Alergológ - Profesionálne služby alergológa",
  description: "Ponúkame diagnostiku a liečbu alergií pre jednotlivcov a firmy.",
  keywords: "alergológ, alergie, diagnostika, liečba alergií, zdravie",
  openGraph: {
    title: "Alergológ - Profesionálne služby alergológa",
    description: "Ponúkame diagnostiku a liečbu alergií pre jednotlivcov a firmy.",
    url: "https://tvoja-webstranka.sk",
    siteName: "Alergológ",
    images: [
      {
        url: "/path-to-your-image.jpg", // URL obrázku pre OG tag
        width: 1200,
        height: 630,
        alt: "Alergológ klinika",
      },
    ],
  },
  twitter: {
    card: "summary_large_image", // môžeš zvoliť iný typ podľa potreby
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
        <div className="min-h-screen flex flex-col">
          <TopBar />
          <Header /> {/* Navigácia sa zobrazí na všetkých stránkach */}
          <main className="container flex-1 py-10">{children}</main> {/* Tento blok teraz vyplní všetok dostupný priestor */}
          <Footer /> {/* Footer sa zobrazí na všetkých stránkach */}
        </div>
      </body>
    </html>
  );
}

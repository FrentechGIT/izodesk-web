import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin", "latin-ext"] });

export const metadata: Metadata = {
  title: "IZODesk — Správa zakázek pro elektrikáře a řemeslníky",
  description:
    "Profesionální aplikace pro správu zakázek, ceníků, soupisů prací a fakturace. Navržená pro elektroinstalační a stavební firmy.",
  openGraph: {
    title: "IZODesk",
    description: "Správa zakázek, ceníků a fakturace pro řemeslníky.",
    url: "https://izodesk.cz",
    siteName: "IZODesk",
    locale: "cs_CZ",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="cs">
      <body className={`${inter.className} antialiased text-slate-800`}>
        {children}
      </body>
    </html>
  );
}

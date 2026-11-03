import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alvin Prayoga — Software & AI Engineer Portfolio",
  description:
    "Building Ideas Into Digital Experiences. Luxury glassmorphism personal portfolio of Alvin Prayoga, crafting AI-powered applications, software systems, and interactive digital products.",
  keywords: [
    "Alvin Prayoga",
    "Software Engineer",
    "Fullstack Developer",
    "AI Development",
    "Portfolio",
    "Next.js",
    "React",
    "TypeScript",
  ],
  authors: [{ name: "Alvin Prayoga" }],
  creator: "Alvin Prayoga",
  openGraph: {
    title: "Alvin Prayoga — Software & AI Engineer Portfolio",
    description: "Building Ideas Into Digital Experiences. Dark Luxury Glassmorphism Portfolio.",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={outfit.variable}>
      <body className="antialiased bg-[#080808] text-[#F5F5F5] font-outfit selection:bg-white/20 selection:text-white">
        {children}
      </body>
    </html>
  );
}

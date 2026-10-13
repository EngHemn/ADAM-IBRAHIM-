import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import ScrollProgress from "@/components/ScrollProgress";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Adam Ibrahim Ismail | Junior Software Developer",
  description:
    "Software Engineering graduate from Salahaddin University seeking an entry-level opportunity as a Junior Software Developer. Based in Erbil, Iraq.",
  keywords: [
    "Adam Ibrahim Ismail",
    "Junior Software Developer",
    "Software Engineer",
    "Salahaddin University",
    "Erbil",
    "Iraq",
    "Python",
    "HTML",
    "CSS",
    "Linux",
  ],
  authors: [{ name: "Adam Ibrahim Ismail" }],
  creator: "Adam Ibrahim Ismail",
  openGraph: {
    title: "Adam Ibrahim Ismail | Junior Software Developer",
    description:
      "Software Engineering graduate from Salahaddin University seeking an entry-level opportunity as a Junior Software Developer.",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-[#0a100f] text-[#f0f9f6] flex flex-col antialiased selection:bg-[#bbe9db] selection:text-[#0a100f]">
        <ScrollProgress />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}

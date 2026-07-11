import type { Metadata } from "next";
import { Sora, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600"],
});

const jbmono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jbmono",
  weight: ["400", "500", "600"],
});

const SITE_URL = "https://sunny-profiterole-445e0b.netlify.app";

export const metadata: Metadata = {
  title: "Manjari Kamley — Full-Stack · AI/ML · DevOps",
  description:
    "Portfolio of Manjari Kamley — final-year Computer Science undergraduate building across full-stack, AI/ML, data analytics, and DevOps/cloud infrastructure.",
  // NOTE: update this to your real custom domain if/when you get one.
  metadataBase: new URL(SITE_URL),
  keywords: [
    "Manjari Kamley",
    "Full-Stack Developer",
    "AI/ML Engineer",
    "DevOps",
    "React",
    "Next.js",
    "Portfolio",
  ],
  authors: [{ name: "Manjari Kamley" }],
  openGraph: {
    title: "Manjari Kamley — Full-Stack · AI/ML · DevOps",
    description:
      "Final-year CS undergraduate building full-stack apps, ML pipelines, and Docker-based infrastructure.",
    url: SITE_URL,
    siteName: "Manjari Kamley",
    type: "website",
    images: [{ url: "/images/profile.jpg", width: 800, height: 800, alt: "Manjari Kamley" }],
  },
  twitter: {
    card: "summary",
    title: "Manjari Kamley — Full-Stack · AI/ML · DevOps",
    description:
      "Final-year CS undergraduate building full-stack apps, ML pipelines, and Docker-based infrastructure.",
    images: ["/images/profile.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable} ${jbmono.variable}`}>
      <body className="font-body antialiased selection:bg-accent selection:text-white">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
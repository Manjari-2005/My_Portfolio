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

export const metadata: Metadata = {
  title: "Manjari Kamley — Full-Stack · AI/ML · DevOps",
  description:
    "Portfolio of Manjari Kamley — final-year Computer Science undergraduate building across full-stack, AI/ML, data analytics, and DevOps/cloud infrastructure.",
  metadataBase: new URL("https://manjarikamley.dev"),
  openGraph: {
    title: "Manjari Kamley — Full-Stack · AI/ML · DevOps",
    description:
      "Final-year CS undergraduate building full-stack apps, ML pipelines, and Docker-based infrastructure.",
    type: "website",
  },
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

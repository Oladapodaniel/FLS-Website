import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const ibmPlexSerif = IBM_Plex_Serif({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-ibm-plex-serif",
});

export const metadata: Metadata = {
  title: "FLS Systems Integrity — Fire & Life Safety Verification",
  description:
    "Independent fire and life safety testing, inspection, auditing and assurance specialists. We verify that fire protection systems perform as intended.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${ibmPlexSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-surface text-ink-900 font-sans">
        {children}
      </body>
    </html>
  );
}

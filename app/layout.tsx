import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Ylessa Rose Dumas | Virtual Assistant & Former ESL Tutor",
    template: "%s | Ylessa Rose Dumas",
  },
  description:
    "Professional Virtual Assistant and former ESL Tutor helping businesses stay organized and individuals improve their English communication skills. Experienced in admin support, scheduling, customer service, and online teaching.",
  keywords: [
    "Ylessa Rose Dumas",
    "Virtual Assistant",
    "ESL Tutor",
    "Online English Teacher",
    "Administrative Support",
    "Customer Support",
    "Remote Assistant",
    "Portfolio",
  ],
  authors: [{ name: "Ylessa Rose Dumas" }],
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

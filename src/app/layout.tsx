import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jane Nnena - Dietitian and Nurse Consultant Portfolio",
  description: "Professional portfolio of Jane Nnena, a Dietitian and Nurse Consultant with 11 years of experience working with startups and known brands.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-inter antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

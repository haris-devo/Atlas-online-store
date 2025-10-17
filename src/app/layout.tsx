import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/global.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Atlas Online Store",
  description:
    "A modern e-commerce platform built with Next.js, TypeScript, Tailwind CSS, and more.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';
import '@/styles/global.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const metropolis = localFont({
  src: [
    {
      path: '../../public/fonts/Metropolis-Thin.otf',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Metropolis-ThinItalic.otf',
      weight: '100',
      style: 'italic',
    },
    {
      path: '../../public/fonts/Metropolis-ExtraLight.otf',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Metropolis-ExtraLightItalic.otf',
      weight: '200',
      style: 'italic',
    },
    {
      path: '../../public/fonts/Metropolis-Light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Metropolis-LightItalic.otf',
      weight: '300',
      style: 'italic',
    },
    {
      path: '../../public/fonts/Metropolis-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Metropolis-RegularItalic.otf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../../public/fonts/Metropolis-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Metropolis-MediumItalic.otf',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../../public/fonts/Metropolis-SemiBold.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Metropolis-SemiBoldItalic.otf',
      weight: '600',
      style: 'italic',
    },
    {
      path: '../../public/fonts/Metropolis-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Metropolis-BoldItalic.otf',
      weight: '700',
      style: 'italic',
    },
    {
      path: '../../public/fonts/Metropolis-ExtraBold.otf',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Metropolis-ExtraBoldItalic.otf',
      weight: '800',
      style: 'italic',
    },
    {
      path: '../../public/fonts/Metropolis-Black.otf',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Metropolis-BlackItalic.otf',
      weight: '900',
      style: 'italic',
    },
  ],
  variable: '--font-metropolis',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Atlas Online Store',
  description:
    'A modern e-commerce platform built with Next.js, TypeScript, Tailwind CSS, and more.',
};

export default function RootLayout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${metropolis.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}

import type { Metadata } from 'next';
import './globals.css';
import { geistMono, poppinsRegular } from './fonts';
import { Toaster } from '@/components/atoms/common/sooner';

export const metadata: Metadata = {
  title: {
    default: 'Clixure Digital',
    template: '%s | Clixure Digital',
  },
  description:
    'Clixure Digital is a modern digital solutions company delivering web, mobile, and branding experiences.',
  keywords: [
    'clixure',
    'clixure digital',
    'digital agency',
    'digital advertiser',
    'malang',
    'web development',
    'next js agency',
  ],
  authors: [{ name: 'Clixure Digital' }],
  creator: 'Clixure Digital',
  metadataBase: new URL('https://clixure.com'),

  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://clixure.com',
    siteName: 'Clixure Digital',
    title: 'Clixure Digital',
    description: 'Modern digital solutions for web, mobile, and branding.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Clixure Digital',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    site: '@clixure',
    creator: '@clixure',
    title: 'Clixure Digital',
    description: 'Modern digital solutions for web, mobile, and branding.',
    images: ['/og-image.png'],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppinsRegular.variable} ${geistMono.variable} antialiased`}
      >
        <Toaster />
        {children}
      </body>
    </html>
  );
}

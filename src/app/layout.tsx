import type { Metadata } from 'next';
import './globals.css';
import { geistMono, poppinsRegular } from './fonts';

export const metadata: Metadata = {
  title: 'Clixure Digital',
  description: 'clixure',
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
        {children}
      </body>
    </html>
  );
}

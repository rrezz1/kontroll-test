import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Kontroll Test - Professional Inspection Services',
  description: 'Professional non-destructive testing and inspection services with 18+ years of experience',
  icons: {
    icon: [
      {
        url: '/images/logo.png',
        type: 'image/png',
      },
    ],
    apple: [
      {
        url: '/images/logo.png',
        type: 'image/png',
      },
    ],
    shortcut: [
      {
        url: '/images/logo.png',
        type: 'image/png',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        
        {/* Additional favicon links for maximum browser compatibility */}
        <link rel="icon" href="/images/logo.png" type="image/png" />
        <link rel="shortcut icon" href="/images/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/images/logo.png" />
        
        {/* For very old browsers that only support ICO */}
        <link rel="icon" type="image/x-icon" href="/images/logo.png" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
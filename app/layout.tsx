import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Sydney Elite Plumbing | 24/7 Emergency Plumber Sydney',
  description: 'Professional plumbing services across Sydney. Emergency plumber available 24/7. Licensed plumbers for all your plumbing needs. Call 1300 PLUMBER now.',
  keywords: 'plumber sydney, emergency plumber, plumbing services, blocked drains, hot water systems, leak detection, sydney plumber',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

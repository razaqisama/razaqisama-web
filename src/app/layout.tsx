import './globals.css';
import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next';
import About from '@/containers/Home/About';
import { Providers } from '@/redux/provider';

export const metadata: Metadata = {
  title: 'Razaqisama - Portfolio',
  description:
    'Welcome to the portfolio of Razaqisama. Explore a collection of my projects showcasing skills in web development, art, design, and more.',
  keywords: [
    'razaqisama',
    'portfolio',
    'web development',
    'theatre',
    'art',
    'software engineer',
    'design',
    'projects',
  ],
  authors: {
    url: 'https://www.instagram.com/joojujijoje/',
    name: 'Josep Razaqi',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <main className="h-screen p-8">
            <div className="hidden h-[100%] lg:flex border-[1px] rounded-xl overflow-hidden">
              <About />
              {children}
            </div>
            <div className="lg:hidden flex justify-center items-center text-center h-[100%] border-[1px] rounded-xl overflow-hidden">
              <p>
                Currently mobile view is under development, please open it on
                the Web View.
              </p>
            </div>
          </main>
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}

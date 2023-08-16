import './globals.css';
import React from 'react';
import type { Metadata } from 'next';
import About from '@/containers/Home/About';

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
        <main className="h-screen p-8">
          <div className="h-[100%] flex border-[1px] rounded-xl overflow-hidden">
            <About />
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}

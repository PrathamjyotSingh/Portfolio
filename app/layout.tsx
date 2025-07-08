import './globals.css';
import type { ReactNode } from 'react';
import { Inter } from 'next/font/google';
import Header from '@/app/components/Header';
import { contact } from '@/lib/data';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'AI Portfolio — Prathamjyot Singh',
  description: 'Interactive resume with Mistral assistant.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.className} scroll-smooth`}>
      <body className="bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300 min-h-screen flex flex-col">
        <Header />
        <main className="max-w-5xl mx-auto px-6 py-10 flex-grow">
          {children}
        </main>
        <footer className="text-center text-xs py-4 border-t border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400">
  © {new Date().getFullYear()} Prathamjyot Singh • 
  <a href={contact.socials.github} className="ml-2 hover:underline" target="_blank">GitHub</a> • 
  <a href={contact.socials.linkedin} className="ml-2 hover:underline" target="_blank">LinkedIn</a>
</footer>

      </body>
    </html>
  );
}

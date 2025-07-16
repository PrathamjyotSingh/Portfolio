import './globals.css';
import type { ReactNode } from 'react';
import { Inter } from 'next/font/google';
import Header from '@/app/components/Header';
import { contact } from '@/lib/data';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'AI Portfolio — Prathamjyot Singh',
  description: 'Interactive resume with Mistral assistant - Computer Engineering student, Kaggle Expert, and AI researcher.',
  keywords: 'AI, Machine Learning, Computer Engineering, Portfolio, Kaggle Expert, Next.js, React',
  authors: [{ name: 'Prathamjyot Singh' }],
  creator: 'Prathamjyot Singh',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://portfolio-rouge-xi-32.vercel.app'),
  openGraph: {
    title: 'AI Portfolio — Prathamjyot Singh',
    description: 'Interactive resume with Mistral assistant - Computer Engineering student, Kaggle Expert, and AI researcher.',
    url: 'https://prathamjyot.dev',
    siteName: 'Prathamjyot Singh Portfolio',
    images: [
      {
        url: '/uploads/profile.jpg',
        width: 1200,
        height: 630,
        alt: 'Prathamjyot Singh - AI Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Portfolio — Prathamjyot Singh',
    description: 'Interactive resume with Mistral assistant - Computer Engineering student, Kaggle Expert, and AI researcher.',
    images: ['/uploads/profile.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.className} scroll-smooth`} suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#3b82f6" />
      </head>
      <body className="bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300 min-h-screen flex flex-col antialiased">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        
        {/* Enhanced Footer */}
        <footer className="relative mt-20 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto px-6 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* About Section */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Prathamjyot Singh</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  Building the future with AI and machine learning. Final-year Computer Engineering student passionate about solving real-world problems.
                </p>
              </div>

              {/* Quick Links */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Quick Links</h3>
                <div className="flex flex-col space-y-2">
                  <a href="/projects" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    Projects
                  </a>
                  <a href="/experience" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    Experience
                  </a>
                  <a href="/skills" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    Skills
                  </a>
                  <a href="/assistant" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    AI Assistant
                  </a>
                </div>
              </div>

              {/* Connect Section */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Connect</h3>
                <div className="flex space-x-4">
                  <a
                    href={contact.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors group"
                  >
                    <Github className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                  </a>
                  <a
                    href={contact.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors group"
                  >
                    <Linkedin className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
                  </a>
                  <a
                    href={`mailto:${contact.email}`}
                    className="flex items-center justify-center w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-red-100 dark:hover:bg-red-900 transition-colors group"
                  >
                    <Mail className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-red-600 dark:group-hover:text-red-400" />
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1">
                © {new Date().getFullYear()} Prathamjyot Singh. Made with <Heart className="w-4 h-4 text-red-500" /> and Next.js
              </p>
              <div className="flex items-center gap-4 mt-4 md:mt-0">
                <a
                  href="/privacy"
                  className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
                >
                  Privacy Policy
                </a>
                <a
                  href="/terms"
                  className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
                >
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
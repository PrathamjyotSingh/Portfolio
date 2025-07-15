'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AcademicCapIcon } from '@heroicons/react/24/solid';
import { Sparkles } from 'lucide-react';

export default function Header() {
  const pathname = usePathname();
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [dark]);

  // Simple helper to check if current page is active
  const isActive = (path: string) => pathname === path;

  return (
    <header className="backdrop-blur bg-white/70 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-700 shadow-md sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex flex-wrap items-center justify-between font-medium">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-gradient text-lg font-extrabold">
          <AcademicCapIcon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          Prathamjyot Singh
        </Link>

        {/* Navigation Links */}
        <div className="flex flex-wrap gap-4 text-sm items-center">
  {[
    { href: '/education', label: 'Education' },
    { href: '/experience', label: 'Experience' },
    { href: '/projects', label: 'Projects' },
    { href: '/skills', label: 'Skills' },
    { href: '/achievements', label: 'Achievements' },
    { href: '/about', label: 'About' },
  ].map(({ href, label }, index, arr) => (
    <div key={href} className="flex items-center gap-4">
      <Link
  href={href}
  className={isActive(href)
    ? 'text-blue-600 dark:text-blue-400 font-semibold'
    : 'text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400'}
>
  {label}
</Link>



      {/* Separator: shown only between items, not after last */}
      {index < arr.length - 1 && (
        <span className="text-gray-300 dark:text-gray-600">|</span>
      )}
    </div>
  ))}


          {/* AI Assistant CTA */}
          <Link
            href="/assistant"
            className={`inline-flex items-center gap-1 px-4 py-2 text-sm rounded-full transition-all btn-hover btn-glow ${
              isActive('/assistant')
                ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg scale-105'
                : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-sm hover:scale-105'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            AI Assistant
          </Link>

          {/* Theme Toggle */}
          <button
            onClick={() => setDark(!dark)}
            className="ml-2 px-3 py-1 rounded-full bg-gray-200 dark:bg-gray-700 hover:shadow transition text-xs"
            aria-label="Toggle Dark Mode"
          >
            {dark ? '☀️ Light' : '🌙 Dark'}
          </button>
        </div>
      </nav>
    </header>
  );
}

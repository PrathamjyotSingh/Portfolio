'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { AcademicCapIcon } from '@heroicons/react/24/solid';

export default function Header() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [dark]);

  return (
    <header className="bg-gray-100 dark:bg-gray-800 border-b dark:border-gray-700 shadow-sm">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex flex-wrap items-center justify-between text-sm font-medium">
        <Link href="/" className="flex items-center gap-2 text-blue-700 font-semibold text-lg hover:underline">
          <AcademicCapIcon className="w-6 h-6 text-blue-600" />
          Prathamjyot Singh
        </Link>

        <div className="flex flex-wrap gap-5 text-gray-700 dark:text-gray-300 text-sm items-center">
          <Link href="/education" className="hover:text-blue-600 transition">Education</Link>
          <Link href="/experience" className="hover:text-blue-600 transition">Experience</Link>
          <Link href="/projects" className="hover:text-blue-600 transition">Projects</Link>
          <Link href="/skills" className="hover:text-blue-600 transition">Skills</Link>
          <Link href="/achievements" className="hover:text-blue-600 transition">Achievements</Link>
          <Link href="/about" className="hover:text-blue-600 transition">About</Link>
          <Link href="/assistant" className="text-blue-700 font-semibold hover:underline">AI Assistant</Link>
          <button
            onClick={() => setDark(!dark)}
            className="ml-4 bg-gray-200 dark:bg-gray-700 text-sm px-3 py-1 rounded hover:shadow transition"
          >
            {dark ? '☀️ Light' : '🌙 Dark'}
          </button>
        </div>
      </nav>
    </header>
  );
}

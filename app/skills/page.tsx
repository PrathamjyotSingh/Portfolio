'use client';

import { skills } from '@/lib/data';
import { Sparkles } from 'lucide-react';

export default function SkillsPage() {
  return (
    <section className="px-4 py-16 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 min-h-screen">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-6">
          <Sparkles className="w-4 h-4" />
          My Skillset
        </div>

        <h1 className="text-5xl font-extrabold text-gradient mb-6 leading-tight pb-1">
          🛠️ Skills
        </h1>

        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Languages, tools, and domains I work with to build smart, scalable AI solutions.
        </p>
      </div>

      {/* Skill Sections */}
      <div className="max-w-4xl mx-auto space-y-12 animate-slide-in-up">
        {/* Languages */}
        <div className="glass-subtle rounded-2xl p-8 border border-gray-200 dark:border-gray-700 shadow-xl card-hover">
          <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-6 flex items-center gap-2">
            💻 Languages
          </h2>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {skills.languages.map((lang, i) => (
              <li
                key={i}
                className="text-sm font-medium px-4 py-2 rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 hover:scale-105 transition-transform shadow-sm"
              >
                {lang}
              </li>
            ))}
          </ul>
        </div>

        {/* Tools & Frameworks */}
        <div className="glass-subtle rounded-2xl p-8 border border-gray-200 dark:border-gray-700 shadow-xl card-hover">
          <h2 className="text-2xl font-bold text-purple-700 dark:text-purple-400 mb-6 flex items-center gap-2">
            🧰 Tools & Frameworks
          </h2>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {skills.tools.map((tool, i) => (
              <li
                key={i}
                className="text-sm font-medium px-4 py-2 rounded-full bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300 hover:scale-105 transition-transform shadow-sm"
              >
                {tool}
              </li>
            ))}
          </ul>
        </div>

        {/* Domains */}
        <div className="glass-subtle rounded-2xl p-8 border border-gray-200 dark:border-gray-700 shadow-xl card-hover">
          <h2 className="text-2xl font-bold text-green-700 dark:text-green-400 mb-6 flex items-center gap-2">
            🧠 Domains
          </h2>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {skills.domains.map((domain, i) => (
              <li
                key={i}
                className="text-sm font-medium px-4 py-2 rounded-full bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 hover:scale-105 transition-transform shadow-sm"
              >
                {domain}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

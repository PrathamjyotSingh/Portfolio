'use client';

import { education } from '@/lib/data';
import { GraduationCap } from 'lucide-react';

export default function EducationPage() {
  return (
    <section className="px-4 py-16 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 min-h-screen">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm font-medium mb-6">
          <GraduationCap className="w-4 h-4" />
          Academic Journey
        </div>

        <h1 className="text-5xl font-extrabold text-gradient mb-6 leading-tight pb-1">
          🎓 Education
        </h1>

        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
          My academic path laid the foundation for applied AI, systems thinking, and research.
        </p>
      </div>

      {/* Education Cards */}
      <div className="max-w-3xl mx-auto space-y-12 animate-slide-in-up">
        {education.map((edu, i) => (
          <div
            key={i}
            className="glass-subtle rounded-2xl p-8 border border-gray-200 dark:border-gray-700 shadow-xl card-hover transition-all duration-300 relative overflow-hidden"
          >
            {/* Background Glow */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_25%,_rgba(59,130,246,0.3),_transparent)]"></div>
            </div>

            <div className="relative z-10">
              <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-2">
                {edu.degree}
              </h2>

              <div className="flex items-center justify-between flex-wrap gap-2 mb-4">
                <p className="text-lg font-medium text-gray-800 dark:text-gray-200">
                  {edu.institution}
                </p>
                <span className="text-sm px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full">
                  {edu.duration}
                </span>
              </div>

              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                📍 {edu.location}
              </p>

              <p className="text-sm text-gray-700 dark:text-gray-300">
                <span className="font-semibold text-gray-900 dark:text-white">CGPA:</span> {edu.cgpa}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

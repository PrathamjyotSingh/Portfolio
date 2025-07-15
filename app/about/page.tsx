'use client';

import { contact } from '@/lib/data';
import { FaGithub, FaLinkedin, FaKaggle } from 'react-icons/fa';
import { UserCircle, Sparkles } from 'lucide-react';

export default function AboutPage() {
  return (
    <section className="px-4 py-16 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 min-h-screen">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm font-medium mb-6">
          <UserCircle className="w-4 h-4" />
          About Me
        </div>

        <h1 className="text-5xl font-extrabold text-gradient mb-6 leading-tight pb-1">
          <span className="inline-block text-[1.2em] align-middle mr-2">👨‍💻</span> My Story
        </h1>

        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
          A deep dive into my journey as an AI engineer, researcher, and passionate builder.
        </p>
      </div>

      {/* Bio Section */}
      <div className="max-w-4xl mx-auto mb-20 animate-slide-in-up relative">
        <div className="glass-strong rounded-2xl border border-gray-200 dark:border-gray-700 shadow-2xl p-8 hover:shadow-[0_25px_60px_-15px_rgba(147,51,234,0.3)] transition-all card-hover relative overflow-hidden">
          {/* Soft radial background accent */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_rgba(147,51,234,0.3),_transparent)]"></div>
          </div>

          <p className="relative z-10 text-lg text-gray-800 dark:text-gray-200 leading-relaxed space-y-4">
            I’m a final-year <strong className="text-gradient">Computer Engineering</strong> student at Thapar Institute (CGPA 8.24), a
            <span className="text-purple-600 dark:text-purple-400 font-semibold"> Kaggle Expert</span>, and a passionate
            <span className="text-blue-600 dark:text-blue-400 font-semibold"> AI researcher</span>.
            <br /><br />
            My research spans <em className="text-blue-600 dark:text-blue-400">medical imaging</em> and <em className="text-purple-600 dark:text-purple-400">environmental safety</em>, with peer-reviewed publications in SCOPUS-indexed conferences.
            <br /><br />
            Whether it’s building <strong className="text-gradient-warm">LLM-based tools</strong>, deploying edge ML models, or fine-tuning transformers, I love turning intelligent ideas into reality. I thrive at the intersection of research, systems, and product.
          </p>
        </div>
      </div>

      {/* Social Links Section */}
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex justify-center items-center gap-2">
          <Sparkles className="w-5 h-5 text-yellow-500" />
          Let’s Connect
        </h2>

        <div className="flex flex-wrap justify-center gap-6 text-lg">
          {[{
              icon: <FaLinkedin className="w-5 h-5" />,
              label: 'LinkedIn',
              href: contact.socials.linkedin,
            },
            {
              icon: <FaGithub className="w-5 h-5" />,
              label: 'GitHub',
              href: contact.socials.github,
            },
            {
              icon: <FaKaggle className="w-5 h-5" />,
              label: 'Kaggle',
              href: contact.socials.Kaggle,
            },
          ].map((social, idx) => (
            <a
              key={idx}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 hover:bg-blue-50 dark:hover:bg-gray-800 transition-all duration-300 shadow-sm hover:shadow-lg btn-hover"
              aria-label={social.label}
            >
              {social.icon}
              <span className="font-medium">{social.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

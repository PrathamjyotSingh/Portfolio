import { projects } from '@/lib/data';
import { ExternalLink, Github, Calendar, Code, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function ProjectsPage() {
  return (
    <section className="px-4 py-12 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 min-h-screen">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-6">
          <Sparkles className="w-4 h-4" />
          Featured Work
        </div>
        
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 dark:from-blue-400 dark:via-purple-400 dark:to-blue-600 bg-clip-text text-transparent mb-6">
          My Projects
        </h1>
        
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
          A collection of AI-powered applications, research projects, and innovative solutions 
          I've built to solve real-world problems.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj, index) => (
            <div
              key={proj.title}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transform hover:-translate-y-2"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                {proj.image ? (
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <div className="w-full h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <Code className="w-16 h-16 text-white opacity-80" />
                  </div>
                )}
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Quick Actions */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {proj.github && (
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/90 dark:bg-gray-800/90 rounded-full hover:bg-white dark:hover:bg-gray-800 transition-colors"
                    >
                      <Github className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                    </a>
                  )}
                  {proj.demo && (
                    <a
                      href={proj.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/90 dark:bg-gray-800/90 rounded-full hover:bg-white dark:hover:bg-gray-800 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                    </a>
                  )}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {proj.title}
                  </h3>
                  <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                    <Calendar className="w-4 h-4" />
                    {proj.duration}
                  </div>
                </div>

                {/* Description */}
                <div className="space-y-2 mb-4">
                  {proj.description.map((line, idx) => (
                    <p key={idx} className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                      {line}
                    </p>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {proj.stack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 mt-4">
                  {proj.github && (
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  )}
                  {proj.demo && (
                    <a
                      href={proj.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </a>
                  )}
                </div>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 border-2 border-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="max-w-4xl mx-auto text-center mt-20 p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Interested in collaborating?
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Let's Connect
            <ExternalLink className="w-4 h-4" />
          </Link>
          <Link
            href="/chat"
            className="inline-flex items-center gap-2 px-6 py-3 border border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors font-medium"
          >
            Ask AI Assistant
            <Sparkles className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
import { experience } from '@/lib/data';
import { MapPin, Calendar, Building, Award, ArrowRight } from 'lucide-react';

export default function ExperiencePage() {
  return (
    <section className="px-4 py-12 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 min-h-screen">
      {/* Header Section */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm font-medium mb-6">
          <Building className="w-4 h-4" />
          Professional Journey
        </div>
        
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-purple-600 via-blue-600 to-purple-800 dark:from-purple-400 dark:via-blue-400 dark:to-purple-600 bg-clip-text text-transparent mb-6 pb-2">
          Experience
        </h1>
        
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
          My professional journey through various roles, internships, and contributions 
          to the AI and technology landscape.
        </p>
      </div>

      {/* Experience Timeline */}
      <div className="max-w-4xl mx-auto">
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-blue-500 opacity-30"></div>
          
          {experience.map((exp, index) => (
            <div
              key={index}
              className="relative pl-20 pb-12 group"
              style={{
                animationDelay: `${index * 0.2}s`
              }}
            >
              {/* Timeline Node */}
              <div className="absolute left-6 top-6 w-5 h-5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-lg ring-4 ring-white dark:ring-gray-900 group-hover:scale-125 transition-transform duration-300">
                <div className="w-full h-full bg-white dark:bg-gray-900 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                </div>
              </div>

              {/* Experience Card */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transform hover:-translate-y-1 group-hover:scale-[1.02]">
                {/* Card Header */}
                <div className="p-6 border-b border-gray-100 dark:border-gray-700">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {exp.title}
                      </h2>
                      <div className="flex items-center gap-2 text-lg font-semibold text-blue-600 dark:text-blue-400 mb-3">
                        <Building className="w-5 h-5" />
                        {exp.organization}
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {exp.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  {/* Key Achievements */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                      <Award className="w-5 h-5 text-yellow-500" />
                      Key Achievements
                    </h3>
                    
                    <div className="space-y-3">
                      {exp.description.map((point, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-3 group/item hover:bg-gray-50 dark:hover:bg-gray-700/50 p-3 rounded-lg transition-colors"
                        >
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform"></div>
                          <p className="text-gray-700 dark:text-gray-300 leading-relaxed flex-1">
                            {/* Simple markdown-like processing for bold text */}
                            <span dangerouslySetInnerHTML={{ 
                              __html: point.replace(/\*\*(.*?)\*\*/g, '<strong class="text-gray-900 dark:text-white">$1</strong>')
                                         .replace(/\*(.*?)\*/g, '<em class="text-blue-600 dark:text-blue-400">$1</em>') 
                            }} />
                          </p>
                          <ArrowRight className="w-4 h-4 text-gray-400 opacity-0 group-hover/item:opacity-100 transition-opacity" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 border border-blue-500 dark:border-blue-400 rounded-2xl opacity-10 group-hover:opacity-60 transition-opacity duration-300 -z-10" />

              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Stats */}
      <div className="max-w-4xl mx-auto mt-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              {experience.length}+
            </div>
            <div className="text-gray-600 dark:text-gray-300">
              Professional Roles
            </div>
          </div>
          
          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
              2+
            </div>
            <div className="text-gray-600 dark:text-gray-300">
              Years Experience
            </div>
          </div>
          
          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
              50+
            </div>
            <div className="text-gray-600 dark:text-gray-300">
              Projects Completed
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
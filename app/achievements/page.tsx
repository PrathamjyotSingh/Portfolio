import { achievements } from '@/lib/data';
import { Trophy, Star, Award, Medal, Crown, Sparkles } from 'lucide-react';

export default function AchievementsPage() {
  // Icons for different achievement types
  const getAchievementIcon = (index: number) => {
    const icons = [Trophy, Star, Award, Medal, Crown];
    const IconComponent = icons[index % icons.length];
    return <IconComponent className="w-6 h-6" />;
  };

  const getAchievementColor = (index: number) => {
    const colors = [
      'from-yellow-500 to-orange-500',
      'from-blue-500 to-purple-500',
      'from-green-500 to-teal-500',
      'from-red-500 to-pink-500',
      'from-purple-500 to-indigo-500'
    ];
    return colors[index % colors.length];
  };

  return (
    <section className="px-4 py-12 bg-gradient-to-br from-slate-50 via-yellow-50 to-orange-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 min-h-screen">
      {/* Header Section */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 text-sm font-medium mb-6">
          <Sparkles className="w-4 h-4" />
          Recognition & Awards
        </div>
        
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 dark:from-yellow-400 dark:via-orange-400 dark:to-red-400 bg-clip-text text-transparent mb-6">
          Achievements
        </h1>
        
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Milestones, recognitions, and accomplishments that mark my journey 
          in technology, research, and innovation.
        </p>
      </div>

      {/* Achievement Stats */}
      <div className="max-w-4xl mx-auto mb-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="text-3xl font-bold text-yellow-600 dark:text-yellow-400 mb-2">
              {achievements.length}
            </div>
            <div className="text-gray-600 dark:text-gray-300 text-sm">
              Total Achievements
            </div>
          </div>
          
          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              3x Expert
            </div>
            <div className="text-gray-600 dark:text-gray-300 text-sm">
              Kaggle Tier
            </div>
          </div>
          
          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
              8.24
            </div>
            <div className="text-gray-600 dark:text-gray-300 text-sm">
              CGPA
            </div>
          </div>
          
          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
              3+
            </div>
            <div className="text-gray-600 dark:text-gray-300 text-sm">
              Publications
            </div>
          </div>
        </div>
      </div>

      {/* Achievements Timeline */}
      <div className="max-w-4xl mx-auto mt-20 animate-slide-in-up">
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-yellow-500 via-orange-500 to-red-500 opacity-30 rounded-full"></div>
          
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="relative pl-20 pb-8 group"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              {/* Timeline Node */}
              <div className={`absolute left-6 top-6 w-8 h-8 bg-gradient-to-r ${getAchievementColor(index)} rounded-full shadow-lg ring-4 ring-white dark:ring-gray-900 group-hover:scale-125 transition-all duration-300 flex items-center justify-center text-white`}>
                {getAchievementIcon(index)}
              </div>

              {/* Achievement Card */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 dark:border-gray-700 hover:border-yellow-300 dark:hover:border-yellow-600 transform hover:-translate-y-1 group-hover:scale-[1.02] overflow-hidden">
                {/* Card Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(255,215,0,0.3),_transparent)]"></div>
                </div>
                
                {/* Card Content */}
                <div className="relative p-6">
                  <div className="flex items-start gap-4">
                    {/* Achievement Icon */}
                    <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-r ${getAchievementColor(index)} rounded-xl flex items-center justify-center text-white shadow-lg`}>
                      {getAchievementIcon(index)}
                    </div>
                    
                    {/* Achievement Content */}
                    <div className="flex-1">
                      <div className="prose prose-gray dark:prose-invert max-w-none">
                        <p className="text-gray-800 dark:text-gray-200 leading-relaxed text-lg mb-0">
                          <span dangerouslySetInnerHTML={{ 
                            __html: achievement
                              .replace(/\*\*(.*?)\*\*/g, '<strong class="text-gray-900 dark:text-white font-bold">$1</strong>')
                              .replace(/\*(.*?)\*/g, '<em class="text-blue-600 dark:text-blue-400 font-semibold">$1</em>')
                              .replace(/`(.*?)`/g, '<code class="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-sm">$1</code>')
                          }} />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 border-2 border-transparent bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="max-w-4xl mx-auto mt-20">
        <div className="text-center p-8 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 rounded-2xl shadow-lg text-white">
          <div className="flex justify-center mb-4">
            <Trophy className="w-16 h-16 text-white opacity-80" />
          </div>
          <h3 className="text-2xl font-bold mb-4">
            Ready to achieve more together?
          </h3>
          <p className="text-yellow-100 mb-6 max-w-2xl mx-auto">
            I'm always looking for new challenges and opportunities to push boundaries. 
            Let's create something extraordinary together.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-colors font-medium shadow-lg"
            >
              Get in Touch
              <Sparkles className="w-4 h-4" />
            </a>
            <a
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-colors font-medium"
            >
              View My Work
              <Trophy className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
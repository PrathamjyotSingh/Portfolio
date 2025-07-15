import { ArrowRight, Download, Sparkles, Code, Brain, Trophy } from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <section className="relative py-20 px-6 text-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 min-h-[90vh] flex items-center">
      {/* 🔵 Enhanced Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-gradient-to-r from-blue-400 to-cyan-400 dark:from-blue-800 dark:to-cyan-800 opacity-20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-[-120px] right-[-80px] w-[350px] h-[350px] bg-gradient-to-r from-purple-400 to-pink-400 dark:from-purple-800 dark:to-pink-800 opacity-20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-gradient-to-r from-green-400 to-blue-400 dark:from-green-800 dark:to-blue-800 opacity-10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Animated grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_24%,rgba(255,255,255,0.05)_25%,rgba(255,255,255,0.05)_26%,transparent_27%,transparent_74%,rgba(255,255,255,0.05)_75%,rgba(255,255,255,0.05)_76%,transparent_77%),linear-gradient(rgba(255,255,255,0.05)_24%,transparent_25%,transparent_26%,rgba(255,255,255,0.05)_27%,rgba(255,255,255,0.05)_74%,transparent_75%,transparent_76%,rgba(255,255,255,0.05)_77%)] bg-[length:100px_100px] opacity-20" />
      </div>

      {/* ✨ Enhanced Content */}
      <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12 text-left">
        <div className="flex-1 space-y-8">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm font-medium backdrop-blur-sm">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            Available for opportunities
          </div>

          {/* Main Heading with Animation */}
          <div className="space-y-4">
            <h1 className="text-6xl sm:text-7xl font-black text-gray-900 dark:text-white mb-6 leading-tight">
              👋 Hi, I'm{' '}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 dark:from-blue-400 dark:via-purple-400 dark:to-blue-600 bg-clip-text text-transparent animate-pulse">
                Prathamjyot Singh
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">
              Final-year Computer Engineering student at Thapar Institute, Kaggle Expert, and AI researcher.
              I build LLM-based apps, deploy AI models, and work on real-world challenges like forest fire detection and courtroom monitoring.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-6 py-6">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Code className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">12+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Projects</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Brain className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">AI</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Specialist</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Trophy className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">3x Expert</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Kaggle</div>
            </div>
          </div>

          {/* Enhanced Action Buttons */}
          <div className="flex flex-wrap gap-4">
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Sparkles className="w-5 h-5" />
              View Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link
              href="/assistant"
              className="group inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 border-2 border-blue-600 dark:border-blue-400 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
            >
              🤖 Ask AI Assistant
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="/uploads/CV.pdf"
              download
              className="group inline-flex items-center gap-2 text-gray-700 dark:text-gray-300 border-2 border-gray-300 dark:border-gray-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 transform hover:scale-105">
              <Download className="w-4 h-4" />
              Download CV
            </a>
          </div>
        </div>

        {/* Enhanced Profile Image */}
        <div className="flex-shrink-0 relative">
          <div className="relative group">
            {/* Animated border */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-lg opacity-30 group-hover:opacity-50 animate-pulse"></div>
            
            {/* Image container */}
            <div className="relative">
              <img
                src="/uploads/profile.jpg"
                alt="Prathamjyot Singh"
                className="w-64 h-64 sm:w-80 sm:h-80 rounded-full shadow-2xl border-4 border-white dark:border-gray-800 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white shadow-lg animate-bounce">
                🚀
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white shadow-lg animate-bounce" style={{ animationDelay: '1s' }}>
                💻
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
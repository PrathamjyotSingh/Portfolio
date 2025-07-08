export default function HomePage() {
  return (
    <section className="relative py-20 px-6 text-center overflow-hidden bg-gray-50 dark:bg-gray-900">
      {/* 🔵 Background Blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-blue-400 dark:bg-blue-800 opacity-30 rounded-full blur-3xl" />
        <div className="absolute bottom-[-120px] right-[-80px] w-[300px] h-[300px] bg-purple-400 dark:bg-purple-800 opacity-30 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.05),_transparent)] dark:bg-[radial-gradient(circle_at_bottom_left,_rgba(255,255,255,0.05),_transparent)]" />
      </div>

      {/* ✨ Content */}
      <div className="max-w-4xl mx-auto flex flex-col-reverse sm:flex-row items-center gap-8 text-left">
        <div className="flex-1">
          <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white mb-4 leading-tight">
            👋 Hi, I'm <span className="text-blue-600 dark:text-blue-400">Prathamjyot Singh</span>
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Final-year Computer Engineering student at Thapar Institute, Kaggle Expert, and AI researcher.
            I build LLM-based apps, deploy AI models, and work on real-world challenges like forest fire detection and courtroom monitoring.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="/projects"
              className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition"
            >
              🚀 View Projects
            </a>
            <a
              href="/assistant"
              className="text-blue-600 dark:text-blue-400 border border-blue-600 dark:border-blue-400 px-5 py-2 rounded hover:bg-blue-100 dark:hover:bg-blue-900 transition"
            >
              🤖 Ask AI Assistant
            </a>
          </div>
        </div>

        <div className="flex-shrink-0">
          <img
            src="/uploads/profile.jpg"
            alt="Prathamjyot Singh"
            className="w-48 h-48 sm:w-56 sm:h-56 rounded-full shadow-xl border-4 border-blue-100 dark:border-blue-900 object-cover"
          />
        </div>
      </div>
    </section>
  );
}

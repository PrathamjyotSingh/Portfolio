import { achievements } from '@/lib/data';

export default function AchievementsPage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <h1 className="text-4xl font-extrabold mb-10 text-gray-900 dark:text-white flex items-center gap-2">
        🏆 <span>Achievements</span>
      </h1>

      <div className="space-y-6 relative border-l border-gray-300 dark:border-gray-600">
        {achievements.map((ach, i) => (
          <div key={i} className="relative pl-6">
            <div className="absolute left-0 top-1.5 w-3 h-3 bg-blue-600 rounded-full ring-2 ring-white dark:ring-gray-900" />
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-5 shadow-sm">
              <p className="text-base text-gray-800 dark:text-gray-200 leading-relaxed">
                <span dangerouslySetInnerHTML={{ __html: ach.replace(/\*(.*?)\*/g, '<em>$1</em>') }} />
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

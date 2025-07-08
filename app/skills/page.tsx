import { skills } from '@/lib/data';

export default function SkillsPage() {
  return (
    <div className="max-w-3xl mx-auto py-12 px-6">
      <h1 className="text-4xl font-extrabold mb-10 text-gray-900 dark:text-white flex items-center gap-2">
        🛠️ <span>Skills</span>
      </h1>

      <div className="skills-section mb-8 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
        <h2 className="text-2xl font-semibold text-blue-800 dark:text-blue-400 mb-3">💻 Languages</h2>
        <ul className="grid grid-cols-2 gap-2 text-gray-800 dark:text-gray-200 text-sm">
          {skills.languages.map((lang, i) => (
            <li key={i} className="skill-pill">{lang}</li>
          ))}
        </ul>
      </div>

      <div className="skills-section mb-8 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
        <h2 className="text-2xl font-semibold text-blue-800 dark:text-blue-400 mb-3">🧰 Tools & Frameworks</h2>
        <ul className="grid grid-cols-2 gap-2 text-gray-800 dark:text-gray-200 text-sm">
          {skills.tools.map((tool, i) => (
            <li key={i} className="skill-pill">{tool}</li>
          ))}
        </ul>
      </div>

      <div className="skills-section p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
        <h2 className="text-2xl font-semibold text-blue-800 dark:text-blue-400 mb-3">🧠 Domains</h2>
        <ul className="grid grid-cols-2 gap-2 text-gray-800 dark:text-gray-200 text-sm">
          {skills.domains.map((domain, i) => (
            <li key={i} className="skill-pill">{domain}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

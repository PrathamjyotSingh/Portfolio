import { experience } from '@/lib/data';
import { FaRegFileAlt } from 'react-icons/fa'; // optional icon
import ReactMarkdown from 'react-markdown';

export default function ExperiencePage() {
  return (
    <div className="max-w-3xl mx-auto py-12 px-6">
      <h1 className="text-4xl font-extrabold mb-10 text-gray-900 dark:text-white flex items-center gap-2">
        💼 <span>Experience</span>
      </h1>

      {experience.map((exp, i) => (
        <div
          key={i}
          className="experience-card mb-8 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:shadow-lg transition-shadow"
        >
          <h2 className="text-2xl font-bold text-blue-800 dark:text-blue-400 mb-1 flex items-center gap-2">
            <FaRegFileAlt className="text-blue-500 dark:text-blue-300" />
            {exp.title}
            <span className="text-gray-700 dark:text-gray-300 font-medium"> — {exp.organization}</span>
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
            {exp.duration} • {exp.location}
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-200 text-sm">
            {exp.description.map((point, index) => (
              <li key={index}>
                <ReactMarkdown components={{ p: ({ children }) => <span>{children}</span> }}>
                  {point}
                </ReactMarkdown>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

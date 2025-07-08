import { education } from '@/lib/data';

export default function EducationPage() {
  return (
    <div className="max-w-3xl mx-auto py-12 px-6">
      <h1 className="text-4xl font-extrabold mb-10 text-gray-900 dark:text-white flex items-center gap-2">
        🎓 <span>Education</span>
      </h1>
      {education.map((edu, i) => (
        <div
          key={i}
          className="education-card mb-8 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:shadow-md dark:hover:shadow-lg transition-shadow"
        >
          <h2 className="text-2xl font-bold text-blue-800 dark:text-blue-400 mb-1">{edu.degree}</h2>
          <p className="text-lg text-gray-900 dark:text-gray-100 font-medium">{edu.institution}</p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{edu.duration} • {edu.location}</p>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            <span className="font-semibold text-gray-800 dark:text-gray-200">CGPA:</span> {edu.cgpa}
          </p>
        </div>
      ))}
    </div>
  );
}

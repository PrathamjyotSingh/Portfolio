import { projects } from '@/lib/data';

export default function ProjectsPage() {
  return (
    <section className="px-4 py-12">
      <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-8 text-center">🚀 My Projects</h2>

      <div className="overflow-x-auto">
        <div className="project-scroll">
          {projects.map((proj) => (
            <div
              key={proj.title}
              className="project-card dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100"
            >
              {proj.image && (
    <img
      src={proj.image}
      alt={proj.title}
      className="rounded-lg mb-4 w-full h-48 object-cover border border-gray-200 dark:border-gray-700"
    />
  )}
              <div>
                <h3 className="project-title text-gray-900 dark:text-white">{proj.title}</h3>
                <p className="project-duration text-gray-600 dark:text-gray-400">{proj.duration}</p>
                <div className="project-description text-gray-700 dark:text-gray-700">
                  {proj.description.map((line, idx) => (
                    <p key={idx}>• {line}</p>
                  ))}
                </div>
              </div>
              <div className="project-stack bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200">
                Tech: {proj.stack.join(', ')}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

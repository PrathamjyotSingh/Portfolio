import { contact } from '@/lib/data';
import { FaGithub, FaLinkedin, FaKaggle } from 'react-icons/fa';

export default function AboutPage() {
  return (
    <section className="max-w-3xl mx-auto py-12 px-6">
      <h1 className="text-4xl font-extrabold mb-8 text-gray-900 dark:text-white flex items-center gap-2">
        👨‍💻 <span>About Me</span>
      </h1>

      <p className="text-lg leading-relaxed text-gray-800 dark:text-gray-200">
        I'm a final-year Computer Engineering student at Thapar Institute (CGPA 8.24), a Kaggle Expert, and an AI researcher.
        My work spans applied machine learning, generative AI, and large language models (LLMs). I've authored peer-reviewed
        research in forest fire detection and medical image segmentation, with publications in SCOPUS-indexed conferences.
        <br /><br />
        Passionate about building real-world AI systems, I've developed LLM-based tools, full-stack web apps, and deep learning models.
        Whether it's deploying lightweight vision models or fine-tuning Transformers, I enjoy turning complex ideas into impactful tech.
      </p>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          📬 Connect with Me
        </h2>
        <div className="flex flex-wrap gap-6 text-blue-600 dark:text-blue-400 text-lg">
          <a
            href={contact.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:underline hover:scale-105 transition-transform"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="w-5 h-5" />
            LinkedIn
          </a>
          <a
            href={contact.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:underline hover:scale-105 transition-transform"
            aria-label="GitHub"
          >
            <FaGithub className="w-5 h-5" />
            GitHub
          </a>
          <a
            href={contact.socials.Kaggle}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:underline hover:scale-105 transition-transform"
            aria-label="Kaggle"
          >
            <FaKaggle className="w-5 h-5" />
            Kaggle
          </a>
        </div>
      </div>
    </section>
  );
}

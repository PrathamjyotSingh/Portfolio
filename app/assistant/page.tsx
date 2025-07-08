'use client';

import { useState } from 'react';
import ReactMarkdown from 'react-markdown';

export default function AssistantPage() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);

  const suggestions = [
    "What are your key skills?",
    "Tell me about your projects.",
    "What research have you published?",
    "Which tools or frameworks do you use?",
    "What experience do you have as a Kaggle Expert?",
    "List your achievements.",
  ];

const predefinedAnswers: Record<string, string> = {
  "what are your key skills?": `
Hi there! As **Prathamjyot Singh**, I specialize in the following:

**🧑‍💻 Programming Languages:** Python, TensorFlow, PyTorch, C++, C, HTML/CSS, JavaScript, SQL  
**🛠️ Tools and Frameworks:** Kaggle, Ollama, LangChain, RAG, Hugging Face, Msty, VS Code, Jupyter Notebook, Firebase, MATLAB  
**📌 Domain Expertise:** Large Language Models (LLMs), Generative AI, Machine Learning, Deep Learning, NLP, Web Dev, DSA
  `,

  "tell me about your projects.": `
🚀 **Highlighted Projects**

1. **RecruitMate – Competitive Coding Platform** (Sept–Dec 2024)  
   • Full-stack app with team management for coding contests  
   • Firebase Auth, Firestore, chat, and email notifications  
   • Role-based UI dashboard  

2. **LLM-Based Research Paper Summarizer** (Feb 2025)  
   • Built using fine-tuned GEMMA + LoRA + quantization  
   • Transformer summarization with PyMuPDF PDF parsing  
   • Deployed on Streamlit  

3. **Brain Tumor Segmentation** (Ongoing)  
   • Hybrid DL model using Transformer + CBAM  
   • >99% accuracy on BraTS dataset  
   • Research paper in preparation  

4. **AI-Powered Courtroom Monitoring System** (Ongoing)  
   • Real-time ASR + BART summarization for legal audio  
   • Speaker diarization and transcript archiving  
   • Built for legal documentation automation
  `,

  "what research have you published?": `
🧠 **Research Publications**

1. 📄 *"AI-Driven Legal Summarization: A Hybrid Framework Integrating Automatic Speech Recognition, Diarization, and BART for Courtroom Proceedings"*  
   - Co-authored and accepted at **IC3 2025 – 17th International Conference on Contemporary Computing**
   - Focus: Automated legal documentation using ASR + speaker diarization + BART summarization
   - 📚 Will be published in **IEEE Xplore**
   - 🏅 Among the top 35% accepted submissions

2. 🔥 *"Early Detection of Forest Fire Using Fine-tuned MobileNetV2: A Lightweight Deep Learning Approach"*  
   - Presented at **ISMS 2025 – 7th International Conference on Information Systems and Management Science**
   - Focus: Lightweight CNN-based models for early fire detection in low-resource regions
   - 📚 Published in **SCOPUS-indexed Springer LNNS proceedings**
   - 👥 Co-authors: Sanjeev Rao, Yugan Dhar, Moksh Sharma
  `,

  "which tools or frameworks do you use?": `
🧰 **Tools & Frameworks I Use**

• **LLM Tools:** Hugging Face, LangChain, Ollama, RAG  
• **Frontend/Backend:** HTML/CSS/JS, Flask, Firebase  
• **ML/DL Frameworks:** TensorFlow, PyTorch, GEMMA, LoRA  
• **Developer Tools:** VS Code, Kaggle, Jupyter Notebook, Streamlit
  `,

  "what experience do you have as a kaggle expert?": `
🏅 **Kaggle Expert Experience**

• Achieved **Kaggle Expert** title in **Datasets**, **Notebooks**, and **Discussions**  
• Ranks: Top 400 in Datasets, Top 800 in Notebooks/Discussions (as of Feb 2025)  
• Published high-quality, community-upvoted notebooks  
• Actively participated in competitions and discussions  
• Focused on NLP and vision use cases
  `,

  "list your achievements.": `
🎯 **Key Achievements**

**📚 Academic**
• Presented forest fire detection paper at ISMS 2025  
• Presented LLM-in-healthcare abstract at PSC Conference 2025  

**🎓 Trainings**
• ML/DL program at TIET (June–July 2023)  
• ML program by 1Stop + Wissenaire, IIT Bhubaneswar (Feb–Mar 2024)  

**🏆 Competitions**
• MAKEATHON5 by Microsoft Learn Student Chapter  
• 36-hour OWASP Hackathon on cybersecurity (TIET)
  `
};


  async function askAssistant() {
    if (!question) return;

    const normalized = question.trim().toLowerCase();

  // Check if predefined answer exists
  if (predefinedAnswers[normalized]) {
    setAnswer(predefinedAnswers[normalized]);
    return;
  }
  
    setLoading(true);
    setAnswer('');

    const res = await fetch('/api/assistant', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt: question })
    });

    const data = await res.json();
    setAnswer(data.answer || 'No answer found');
    setLoading(false);
  }

  function handleSuggestionClick(suggested: string) {
    setQuestion(suggested);
    askAssistant();
  }

  return (
    <div className="max-w-3xl mx-auto py-12 px-6">
      <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
        🤖 Ask My AI Portfolio
      </h1>

      <textarea
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        className="w-full h-32 p-4 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none text-gray-800 dark:text-gray-100 dark:bg-gray-900"
        placeholder="Ask about my skills, projects, research, or tools I've used..."
      />

      <button
        onClick={askAssistant}
        disabled={loading || !question}
        className={`mt-4 px-5 py-2.5 text-white font-semibold rounded-md transition duration-200 ${
          loading || !question
            ? 'bg-blue-300 cursor-not-allowed'
            : 'bg-blue-600 hover:bg-blue-700'
        }`}
      >
        {loading ? 'Thinking...' : 'Ask'}
      </button>

      {/* Suggested Questions */}
      <div className="mt-8">
        <h2 className="text-lg font-semibold mb-3 text-gray-700 dark:text-gray-300">Try asking:</h2>
        <div className="flex flex-wrap gap-3">
          {suggestions.map((sug, idx) => (
            <button
              key={idx}
              onClick={() => handleSuggestionClick(sug)}
              className="bg-gray-100 dark:bg-gray-700 dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-blue-800 text-sm px-4 py-2 rounded-full border border-gray-300 dark:border-gray-600 transition"
            >
              {sug}
            </button>
          ))}
        </div>
      </div>

      {answer && (
        <div className="mt-8 p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-md prose prose-blue dark:prose-invert max-w-none">
          <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">💡 Answer</h2>
          <ReactMarkdown>{answer}</ReactMarkdown>
        </div>
      )}
    </div>
  );
}

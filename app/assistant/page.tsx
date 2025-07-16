'use client';

import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Sparkles, Bot } from 'lucide-react';

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

1. **RecruitMate – Competitive Coding Platform**  
   • Full-stack app with team management for coding contests  
   • Firebase Auth, Firestore, chat, and email notifications  

2. **LLM-Based Research Paper Summarizer**  
   • Fine-tuned GEMMA + LoRA + quantization  
   • Summarization with PyMuPDF + Streamlit  

3. **Brain Tumor Segmentation**  
   • Transformer + CBAM hybrid  
   • >99% accuracy on BraTS  

4. **Courtroom Monitoring System**  
   • Real-time ASR + BART for legal audio  
   • Transcript archival + speaker diarization
    `,

    "what research have you published?": `
🧠 **Research Publications**

1. 📄 *AI-Driven Legal Summarization* — **IC3 2025**  
   • ASR + diarization + BART for courtroom proceedings  
   • Accepted to IEEE Xplore

2. 🔥 *Forest Fire Detection Using MobileNetV2* — **ISMS 2025**  
   • SCOPUS-indexed Springer LNNS  
   • Lightweight DL for resource-limited areas
    `,

    "which tools or frameworks do you use?": `
🧰 **Tools I Use**

• LLM: Hugging Face, LangChain, Ollama, RAG  
• Web: HTML/CSS/JS, Flask, Firebase  
• ML/DL: TensorFlow, PyTorch, GEMMA, LoRA  
• Tools: VS Code, Kaggle, Streamlit
    `,

    "what experience do you have as a kaggle expert?": `
🏅 **Kaggle Expert Experience**

• Titles in Datasets, Notebooks & Discussions  
• Top 400 Datasets, Top 800 Notebooks  
• High-quality notebooks & active competitions  
• NLP and vision-focused
    `,

    "list your achievements.": `
🎯 **Key Achievements**

📚 *Academics*  
• ISMS forest fire detection paper  
• PSC LLM-in-healthcare abstract  

🎓 *Training*  
• TIET ML/DL program  
• IIT Bhubaneswar ML bootcamp  

🏆 *Competitions*  
• MAKEATHON5 (Microsoft Learn)  
• 36h OWASP Cybersecurity Hackathon
    `,
  };

  async function askAssistant() {
  if (!question) return;
  const normalized = question.trim().toLowerCase();

  if (predefinedAnswers[normalized]) {
    setAnswer(predefinedAnswers[normalized]);
    return;
  }

  // 🔍 Keyword-based fallback
  const keywords = Object.keys(predefinedAnswers);
  for (const key of keywords) {
    if (normalized.includes('skill') && key.includes('skill')) {
      setAnswer(predefinedAnswers[key]);
      return;
    }
    if (normalized.includes('project') && key.includes('project')) {
      setAnswer(predefinedAnswers[key]);
      return;
    }
    if (normalized.includes('research') && key.includes('research')) {
      setAnswer(predefinedAnswers[key]);
      return;
    }
    if (normalized.includes('tool') && key.includes('tool')) {
      setAnswer(predefinedAnswers[key]);
      return;
    }
    if (normalized.includes('kaggle') && key.includes('kaggle')) {
      setAnswer(predefinedAnswers[key]);
      return;
    }
    if (normalized.includes('achievement') && key.includes('achievement')) {
      setAnswer(predefinedAnswers[key]);
      return;
    }
    if (normalized.includes('contact')) {
      setAnswer(`
📫 **Contact Info**

• Email: prathamjyotsingh@gmail.com  
• GitHub: [@prathamcodes](https://github.com/prathamcodes)  
• LinkedIn: [Prathamjyot Singh](https://linkedin.com/in/prathamjyotsingh)  
      `);
      return;
    }
  }

  // ❓ No match: call API
  setLoading(true);
  setAnswer('');

  try {
    const res = await fetch('/api/assistant', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt: question })
    });

    const data = await res.json();
    setAnswer(data.answer || 'No answer found');
  } catch (err) {
    setAnswer('⚠️ Failed to fetch response. Please try again later.');
  } finally {
    setLoading(false);
  }
}

  function handleSuggestionClick(suggested: string) {
    setQuestion(suggested);
    askAssistant();
  }

  return (
    <section className="px-4 py-16 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 min-h-screen">
      {/* Header */}
      <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-in">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-6">
          <Bot className="w-4 h-4" />
          AI Assistant
        </div>

        <h1 className="text-5xl font-extrabold text-gradient mb-6 leading-tight pb-1">
          🤖 Ask My AI Portfolio
        </h1>

        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Get instant, AI-powered answers about my skills, projects, research, and achievements.
        </p>
      </div>

      {/* Chat UI */}
      <div className="max-w-3xl mx-auto animate-slide-in-up space-y-8">
        <textarea
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className="w-full h-32 p-4 rounded-xl bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 border border-gray-300 dark:border-gray-700 shadow-md focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
          placeholder="Ask about my skills, research, or experience..."
        />

        <button
          onClick={askAssistant}
          disabled={loading || !question}
          className={`w-full py-3 text-white font-semibold rounded-xl transition duration-300 shadow-md ${
            loading || !question
              ? 'bg-blue-300 cursor-not-allowed'
              : 'bg-blue-600 hover:bg-blue-700'
          }`}
        >
          {loading ? 'Thinking...' : 'Ask'}
        </button>

        {/* Suggestions */}
        <div>
          <h2 className="text-lg font-semibold mb-3 text-gray-700 dark:text-gray-300">
            💡 Try asking:
          </h2>
          <div className="flex flex-wrap gap-3">
            {suggestions.map((sug, idx) => (
              <button
                key={idx}
                onClick={() => handleSuggestionClick(sug)}
                className="bg-gray-100 dark:bg-gray-700 text-sm text-gray-800 dark:text-gray-200 px-4 py-2 rounded-full border border-gray-300 dark:border-gray-600 hover:bg-blue-100 dark:hover:bg-blue-800 transition-all"
              >
                {sug}
              </button>
            ))}
          </div>
        </div>

        {/* Answer */}
        {answer && (
          <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg prose prose-blue dark:prose-invert max-w-none animate-fade-in">
            <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
              💬 Response
            </h2>
            <ReactMarkdown>{answer}</ReactMarkdown>
          </div>
        )}
      </div>
    </section>
  );
}

import type { NextApiRequest, NextApiResponse } from 'next';
// import { education, experience, projects, skills, achievements, contact } from '@/lib/data';

export const education = [
  {
    institution: "Thapar Institute of Engineering and Technology",
    degree: "Bachelor of Engineering in Computer Engineering",
    cgpa: "8.24",
    location: "Patiala, Punjab",
    duration: "Sep 2022 – May 2026"
  }
];

export const experience = [
  {
  title: "Researcher",
  organization: "ISMS 2024-25 — 7th International Conference on Information Systems and Management Science",
  location: "Remote",
  duration: "Jan 2025",
  description: [
    "Co-authored the research paper *“Early Detection of Forest Fire Using Fine-tuned MobileNetV2: A Lightweight Deep Learning Approach.”*",
    "Focused on creating a lightweight model suitable for low-resource, fire-prone environments where early detection is critical.",
    "Presented the work at ISMS 2024-25 (Feb 22-23, 2025).",
    "Published in SCOPUS-indexed Springer LNNS proceedings.",
    "Authors: Prathamjyot Singh, Dr. Sanjeev Rao, Yugan Dhar, Moksh Sharma"
  ]
},
{
  title: "Researcher",
  organization: "IC3 2025 — 17th International Conference on Contemporary Computing",
  location: "Remote",
  duration: "Jul 2024",
  description: [
    "Co-authored the paper *“AI-Driven Legal Summarization: A Hybrid Framework Integrating Automatic Speech Recognition, Diarization, and BART for Courtroom Proceedings,”* accepted for presentation at IC3 2025.",
    "Designed an end-to-end pipeline integrating ASR, speaker diarization, and transformer-based summarization to automate legal documentation.",
    "The paper was accepted among the top 35% of submissions and will be published in the IEEE Xplore digital library.",
    "Authors: Prathamjyot Singh, Dr. Sanjeev Rao, Dr. Jasmeet Singh, Yugan Dhar, Moksh Sharma, Pranav Chawla"
  ]
},{
    title: "Kaggle Expert",
    organization: "Kaggle",
    location: "Remote",
    duration: "Ongoing",
    description: [
      "Achieved Kaggle Expert status in Datasets, Notebooks, and Discussions.",
      "Ranked under 800 in Notebooks, Discussions, and under 400 in Datasets (as of Feb 22, 2025).",
      "Contributed high-quality datasets and notebooks, actively engaged in community learning."
    ]
  },

];

export const projects = [
  {
    title: "RecruitMate – Competitive Coding Platform",
    image: "/uploads/Recruitmate.png", // 🔁 Add image paths
    stack: ["Flask", "Firebase", "HTML", "CSS", "JavaScript"],
    duration: "Sept 2024 – Dec 2024",
    description: [
      "Developed full-stack app for coding competitions with team features.",
      "Used Firebase Auth, Firestore, real-time chat, and email notifications.",
      "Built role-based UI dashboard for contest and team management."
    ],
    demo:"",
  },
  {
    title: "LLM-Based Research Paper Summarizer",
    image: "/uploads/Summary.png",
    stack: ["GEMMA", "LoRA", "PyTorch", "Streamlit", "bnb"],
    duration: "Feb 2025",
    description: [
      "Built a summarizer using fine-tuned GEMMA with LoRA and 4-bit/8-bit quantization.",
      "Parsed PDFs using PyMuPDF and applied Transformer-based summarization.",
      "Deployed with Streamlit for real-time interaction."
    ],
    demo:"",
  },
  {
    title: "Brain Tumor Segmentation using Hybrid Deep Learning",
    image: "/uploads/Brain.png",
    stack: ["Python", "TensorFlow", "Transformers", "CBAM"],
    duration: "Ongoing",
    description: [
      "Integrated Transformer + CBAM for high-accuracy brain tumor segmentation.",
      "Used BraTS dataset and achieved >99% classification accuracy.",
      "Currently drafting a research paper on results."
    ],
    demo:"",
  },
  {
    title: "AI-Powered Courtroom Monitoring System",
    image: "/uploads/Legal.jpg",
    stack: ["NLP", "ASR", "Transformers", "Diarization"],
    duration: "Ongoing",
    description: [
      "Developed real-time system using ASR + BART for legal summarization.",
      "Used AssemblyAI for speaker diarization and transcript structuring.",
      "Enabled efficient summarization and archiving of courtroom audio."
    ],
    github:"",
    demo:"",
  }
];


export const skills = {
  languages: ["Python", "TensorFlow", "PyTorch", "C++", "C", "HTML/CSS", "JavaScript", "SQL"],
  tools: [
    "Kaggle", "Ollama", "LangChain", "RAG", "Hugging Face", "Msty",
    "VS Code", "Jupyter Notebook",  "Firebase", "MATLAB"
  ],
  domains: [
    "Large Language Models (LLMs)", "Generative AI", "Machine Learning", "Deep Learning",
    "Natural Language Processing (NLP)", "Web Development", "Data Structures and Algorithms"
  ]
};

export const achievements = [
  "Presented the research paper *“Early Detection of Forest Fire Using Fine-tuned MobileNetV2: A Lightweight Deep Learning Approach”* at ISMS 2025, NIT Kurukshetra (Feb 22–23, 2025).",
  "Presented an abstract titled *“A Review of Multimodal Large Language Models in Healthcare”* at the 28th PSC National Conference, Khalsa College Amritsar (Feb 8, 2025), with recognition for research contributions.",
  "Completed a 6-week ML/DL training program at Thapar Institute of Engineering & Technology (June 5 – July 14, 2023).",
  "Participated in a 2-month Machine Learning program conducted by 1Stop and Wissenaire, IIT Bhubaneswar (Feb – March 2024).",
  "Competed in *MAKEATHON5*, a 24-hour hybrid hackathon hosted by Microsoft Learn Student Chapter, TIET (Feb 25–26, 2023).",
  "Participated in a 36-hour OWASP Hackathon at Thapar Institute (April 14–16, 2023), focused on cybersecurity and innovation."
];

export const contact = {
  name: "Prathamjyot Singh",
  email: "jyotpratham@gmail.com",
  phone: "+91-9988144169",
  socials: {
    linkedin: "https://linkedin.com/in/prathamjyot-singh-875538250/",
    github: "https://github.com/PrathamjyotSingh",
    Kaggle: "https://www.kaggle.com/prathamjyotsingh"
  },
};

// Use a more reliable model that's guaranteed to be available
const modelId = process.env.MODEL_ID || "gpt2";

function getRelevantContext(prompt?: string) {
  if (!prompt) return 'No relevant context provided.';

  const query = prompt.toLowerCase();
  let context = '';

  // Education
  if (query.includes('education') || query.includes('degree') || query.includes('thapar')) {
    context += '**Education**\n';
    context += education.map(e =>
      `- ${e.degree} at ${e.institution}, ${e.location} (${e.duration}), CGPA: ${e.cgpa}`
    ).join('\n') + '\n\n';
  }

  // Contact
  if (
    query.includes('contact') ||
    query.includes('social') ||
    query.includes('email') ||
    query.includes('linkedin') ||
    query.includes('github') ||
    query.includes('kaggle')
  ) {
    context += '**Contact**\n';
    context += `• Name: ${contact.name}\n`;
    context += `• Email: ${contact.email}\n`;
    context += `• Phone: ${contact.phone}\n\n`;
    context += '**Socials**\n';
    for (const [platform, url] of Object.entries(contact.socials)) {
      context += `• ${platform}: ${url}\n`;
    }
    context += '\n';
  }

  // Experience
  if (
    query.includes('experience') ||
    query.includes('kaggle') ||
    query.includes('researcher') ||
    query.includes('research') ||
    query.includes('paper')
  ) {
    context += '**Experience**\n';
    context += experience.map(exp =>
      `- ${exp.title} at ${exp.organization} (${exp.duration}, ${exp.location}):\n  ${exp.description.map(d => `• ${d}`).join('\n  ')}`
    ).join('\n\n') + '\n\n';
  }

  // Projects (match partial keywords)
  const projectKeywords = ['recruitmate', 'summarizer', 'tumor', 'courtroom', 'brain', 'ai-powered', 'llm'];
  const matchedProjects = projects.filter(p =>
    projectKeywords.some(kw => p.title.toLowerCase().includes(kw) && query.includes(kw))
  );

  if (matchedProjects.length > 0) {
    context += '**Projects**\n';
    for (const proj of matchedProjects) {
      context += `**${proj.title}** (${proj.duration})\nStack: ${proj.stack.join(', ')}\n`;
      context += proj.description.map(d => `• ${d}`).join('\n') + '\n\n';
    }
  }

  // Skills
  if (query.includes('skills') || query.includes('technologies') || query.includes('tools')) {
    context += '**Skills**\n';
    context += `Languages:\n• ${skills.languages.join(', ')}\n\n`;
    context += `Tools:\n• ${skills.tools.join(', ')}\n\n`;
    context += `Domains:\n• ${skills.domains.join(', ')}\n\n`;
  }

  // Achievements
  if (query.includes('achievements') || query.includes('awards') || query.includes('hackathon')) {
    context += '**Achievements**\n';
    context += achievements.map(a => `• ${a}`).join('\n') + '\n\n';
  }

  return context || 'No relevant context matched the query.';
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const prompt = req.body?.prompt;
  
  if (!prompt || typeof prompt !== 'string') {
    return res.status(400).json({ error: 'Missing or invalid prompt' });
  }

  const relevantContext = getRelevantContext(prompt);

  const fullContext = `
You're a helpful AI assistant that answers questions about a portfolio website. Respond **only to the question**, in first-person tone as "Prathamjyot Singh". Be concise, structured, and informative. Do not introduce unrelated resume details.

✅ Follow this format:
- Use bullet points for lists
- Can use emoji and bold text for better appearance.
- Use markdown
- Write short, clean paragraphs
- Do not repeat my resume — use it to answer naturally

My Background:

${relevantContext}

Only use the relevant information below to answer this visitor query. Avoid repeating all my experience or skills unless asked.

👉 Visitor's Question:
${prompt}
`;

  try {
    if (process.env.NODE_ENV === 'development') {
      // 🧠 Local Mistral via Ollama
      const ollamaRes = await fetch('http://localhost:11434/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'mistral',
          prompt: fullContext,
          stream: false
        })
      });
      const data = await ollamaRes.json();
      return res.status(200).json({ answer: data.response });
    } else {
      // 🌐 Production: Better error handling and model selection
      console.log('🔑 Using MODEL_ID:', modelId);
      console.log('🔑 HF API Key exists:', !!process.env.HUGGINGFACE_API_KEY);
      
      const hfRes = await fetch(`https://api-inference.huggingface.co/models/${modelId}`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.HUGGINGFACE_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          inputs: fullContext,
          parameters: {
            max_new_tokens: 300,
            temperature: 0.7,
            top_p: 0.9,
            return_full_text: false
          },
          options: {
            wait_for_model: true // Important: Wait for model to load
          }
        })
      });

      console.log('🔍 HF Response Status:', hfRes.status);
      
      if (!hfRes.ok) {
        const errorText = await hfRes.text();
        console.error('❌ HF API Error:', errorText);
        throw new Error(`HF API Error: ${hfRes.status} - ${errorText}`);
      }

      const hfData = await hfRes.json();
      console.log('📊 HF Response:', hfData);
      
      // Handle different response formats
      let answer = '';
      if (Array.isArray(hfData) && hfData[0]?.generated_text) {
        answer = hfData[0].generated_text;
      } else if (hfData.generated_text) {
        answer = hfData.generated_text;
      } else if (hfData.error) {
        throw new Error(`HF Model Error: ${hfData.error}`);
      } else {
        console.warn('⚠️ Unexpected HF response format:', hfData);
        answer = 'I apologize, but I received an unexpected response format. Please try again.';
      }
      
      return res.status(200).json({ answer });
    }
  } catch (err) {
    console.error('❌ Error in assistant API:', err);
    
    // Return a helpful error message instead of generic one
    const errorMessage = err instanceof Error ? err.message : 'Unknown error occurred';
    
    return res.status(500).json({ 
      error: 'AI service temporarily unavailable',
      details: process.env.NODE_ENV === 'development' ? errorMessage : undefined
    });
  }
}
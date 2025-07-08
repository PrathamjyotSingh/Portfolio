// lib/data.ts

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
  {
  title: "Researcher",
  organization: "ISMS 2024-25 — 7th International Conference on Information Systems and Management Science",
  location: "Remote",
  duration: "Jan 2025",
  description: [
    "Authored the research paper *“Early Detection of Forest Fire Using Fine-tuned MobileNetV2: A Lightweight Deep Learning Approach.”*",
    "Focused on creating a lightweight model suitable for low-resource, fire-prone environments where early detection is critical.",
    "Presented the work at ISMS 2024-25 (Feb 22–23, 2025).",
    "Published in SCOPUS-indexed Springer LNNS proceedings.",
    "Authors: Prathamjyot Singh, Sanjeev Rao, Yugan Dhar, Moksh Sharma"
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
    "The paper was accepted among the top 35% of submissions and will be published in the IEEE Xplore digital library."
  ]
}

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
    ]
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
    ]
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
    ]
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
    ]
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

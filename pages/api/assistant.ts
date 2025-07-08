import type { NextApiRequest, NextApiResponse } from 'next';
import { education, experience, projects, skills, achievements,contact } from '@/lib/data';

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
      // 🌐 Production: Gemma via Hugging Face
      const hfRes = await fetch('https://api-inference.huggingface.co/models/google/gemma-2b-it', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.HUGGINGFACE_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          inputs: fullContext,
          parameters: {
            max_new_tokens: 256,
            return_full_text: false
          }
        })
      });

      const hfData = await hfRes.json();
      const answer = hfData?.[0]?.generated_text || 'No response';
      return res.status(200).json({ answer });
    }
  } catch (err) {
    console.error('Error in assistant API:', err);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
import type { NextApiRequest, NextApiResponse } from 'next';
import { education, experience, projects, skills, achievements, contact } from '@/lib/data';

// Use a more reliable model that's guaranteed to be available
const modelId = process.env.MODEL_ID || "microsoft/DialoGPT-medium";

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
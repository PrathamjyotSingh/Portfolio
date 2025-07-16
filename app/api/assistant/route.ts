import { NextRequest } from 'next/server';
import { education, experience, projects, skills, achievements, contact } from '@/lib/data';
export async function POST(req: NextRequest) {
  return Response.json({ answer: '✅ Route working' });
}
// const modelId = process.env.MODEL_ID || 'gpt2';

// function getRelevantContext(prompt?: string) {
//   if (!prompt) return 'No relevant context provided.';
//   const query = prompt.toLowerCase();
//   let context = '';

//   if (query.includes('education') || query.includes('degree') || query.includes('thapar')) {
//     context += '**Education**\n';
//     context += education.map(e => `- ${e.degree} at ${e.institution}, ${e.location} (${e.duration}), CGPA: ${e.cgpa}`).join('\n') + '\n\n';
//   }

//   if (query.includes('contact') || query.includes('social') || query.includes('email')) {
//     context += '**Contact**\n';
//     context += `• Name: ${contact.name}\n• Email: ${contact.email}\n• Phone: ${contact.phone}\n\n`;
//     context += '**Socials**\n';
//     for (const [platform, url] of Object.entries(contact.socials)) {
//       context += `• ${platform}: ${url}\n`;
//     }
//     context += '\n';
//   }

//   if (query.includes('experience') || query.includes('kaggle') || query.includes('research')) {
//     context += '**Experience**\n';
//     context += experience.map(exp =>
//       `- ${exp.title} at ${exp.organization} (${exp.duration}, ${exp.location}):\n  ${exp.description.map(d => `• ${d}`).join('\n  ')}`
//     ).join('\n\n') + '\n\n';
//   }

//   const projectKeywords = ['recruitmate', 'summarizer', 'tumor', 'courtroom', 'brain', 'ai-powered', 'llm'];
//   const matchedProjects = projects.filter(p => projectKeywords.some(kw => p.title.toLowerCase().includes(kw) && query.includes(kw)));
//   if (matchedProjects.length > 0) {
//     context += '**Projects**\n';
//     for (const proj of matchedProjects) {
//       context += `**${proj.title}** (${proj.duration})\nStack: ${proj.stack.join(', ')}\n`;
//       context += proj.description.map(d => `• ${d}`).join('\n') + '\n\n';
//     }
//   }

//   if (query.includes('skills') || query.includes('technologies')) {
//     context += '**Skills**\n';
//     context += `Languages:\n• ${skills.languages.join(', ')}\n\n`;
//     context += `Tools:\n• ${skills.tools.join(', ')}\n\n`;
//     context += `Domains:\n• ${skills.domains.join(', ')}\n\n`;
//   }

//   if (query.includes('achievements') || query.includes('awards')) {
//     context += '**Achievements**\n';
//     context += achievements.map(a => `• ${a}`).join('\n') + '\n\n';
//   }

//   return context || 'No relevant context matched the query.';
// }

// export async function POST(req: NextRequest): Promise<Response> {
//   try {
//     const body = await req.json();
//     const prompt = body?.prompt;

//     if (!prompt || typeof prompt !== 'string') {
//       return new Response(JSON.stringify({ error: 'Missing or invalid prompt' }), {
//         status: 400,
//         headers: { 'Content-Type': 'application/json' },
//       });
//     }

//     const relevantContext = getRelevantContext(prompt);
//     const fullContext = `
// You're a helpful AI assistant that answers questions about a portfolio website. Respond **only to the question**, in first-person tone as "Prathamjyot Singh". Be concise, structured, and informative.

// ✅ Use:
// - Markdown
// - Bullet points, short paragraphs
// - Emojis when appropriate

// My Background:

// ${relevantContext}

// 👉 Visitor's Question:
// ${prompt}
// `;

//     const isLocal = process.env.VERCEL !== '1';

//     if (isLocal) {
//       const ollamaRes = await fetch('http://localhost:11434/api/generate', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           model: 'mistral',
//           prompt: fullContext,
//           stream: false,
//         }),
//       });
//       const data = await ollamaRes.json();
//       return Response.json({ answer: data.response });
//     }

//     const hfRes = await Promise.race([
//       fetch(`https://api-inference.huggingface.co/models/${modelId}`, {
//         method: 'POST',
//         headers: {
//           Authorization: `Bearer ${process.env.HUGGINGFACE_API_KEY}`,
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           inputs: fullContext,
//           parameters: {
//             max_new_tokens: 300,
//             temperature: 0.7,
//             top_p: 0.9,
//             return_full_text: false,
//           },
//           options: { wait_for_model: true },
//         }),
//       }),
//       new Promise<never>((_, reject) =>
//         setTimeout(() => reject(new Error('⏰ Hugging Face API request timed out')), 30000)
//       ),
//     ]);

//     const hfData = await hfRes.json();

//     let answer = '';
//     if (Array.isArray(hfData) && hfData[0]?.generated_text) {
//       answer = hfData[0].generated_text;
//     } else if (hfData.generated_text) {
//       answer = hfData.generated_text;
//     } else if (hfData.error) {
//       throw new Error(`HF Model Error: ${hfData.error}`);
//     } else {
//       answer = 'I received an unexpected response format. Please try again.';
//     }

//     return Response.json({ answer });
//   } catch (err: any) {
//     console.error('❌ Error in /api/assistant:', err);
//     return new Response(JSON.stringify({
//       error: 'AI service temporarily unavailable',
//       details: process.env.NODE_ENV === 'development' ? err.message : undefined
//     }), {
//       status: 500,
//       headers: { 'Content-Type': 'application/json' }
//     });
//   }
// }

import { NextRequest } from 'next/server';
import { education, experience, projects, skills, achievements, contact } from '@/lib/data';

const modelId = process.env.MODEL_ID || 'microsoft/DialoGPT-medium';

function getRelevantContext(prompt?: string) {
  if (!prompt) return 'No relevant context provided.';
  const query = prompt.toLowerCase();
  let context = '';

  if (query.includes('education') || query.includes('degree') || query.includes('thapar')) {
    context += '**Education**\n';
    context += education.map(e => `- ${e.degree} at ${e.institution}, ${e.location} (${e.duration}), CGPA: ${e.cgpa}`).join('\n') + '\n\n';
  }

  if (query.includes('contact') || query.includes('social') || query.includes('email')) {
    context += '**Contact**\n';
    context += `• Name: ${contact.name}\n• Email: ${contact.email}\n• Phone: ${contact.phone}\n\n`;
    context += '**Socials**\n';
    for (const [platform, url] of Object.entries(contact.socials)) {
      context += `• ${platform}: ${url}\n`;
    }
    context += '\n';
  }

  if (query.includes('experience') || query.includes('kaggle') || query.includes('research')) {
    context += '**Experience**\n';
    context += experience.map(exp =>
      `- ${exp.title} at ${exp.organization} (${exp.duration}, ${exp.location}):\n  ${exp.description.map(d => `• ${d}`).join('\n  ')}`
    ).join('\n\n') + '\n\n';
  }

  const projectKeywords = ['recruitmate', 'summarizer', 'tumor', 'courtroom', 'brain', 'ai-powered', 'llm'];
  const matchedProjects = projects.filter(p => projectKeywords.some(kw => p.title.toLowerCase().includes(kw) && query.includes(kw)));
  if (matchedProjects.length > 0) {
    context += '**Projects**\n';
    for (const proj of matchedProjects) {
      context += `**${proj.title}** (${proj.duration})\nStack: ${proj.stack.join(', ')}\n`;
      context += proj.description.map(d => `• ${d}`).join('\n') + '\n\n';
    }
  }

  if (query.includes('skills') || query.includes('technologies')) {
    context += '**Skills**\n';
    context += `Languages:\n• ${skills.languages.join(', ')}\n\n`;
    context += `Tools:\n• ${skills.tools.join(', ')}\n\n`;
    context += `Domains:\n• ${skills.domains.join(', ')}\n\n`;
  }

  if (query.includes('achievements') || query.includes('awards')) {
    context += '**Achievements**\n';
    context += achievements.map(a => `• ${a}`).join('\n') + '\n\n';
  }

  return context || 'No relevant context matched the query.';
}

export async function POST(req: NextRequest): Promise<Response> {
  try {
    // Validate environment variables
    if (!process.env.HUGGINGFACE_API_KEY) {
      console.error('❌ HUGGINGFACE_API_KEY not found in environment variables');
      return new Response(JSON.stringify({ 
        error: 'Configuration error: Missing API key' 
      }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    console.log('✅ HF KEY found:', process.env.HUGGINGFACE_API_KEY?.slice(0, 10) + '...');
    console.log('✅ Model ID:', modelId);
    console.log('✅ Environment:', process.env.NODE_ENV);

    const body = await req.json();
    const prompt = body?.prompt;

    if (!prompt || typeof prompt !== 'string') {
      return new Response(JSON.stringify({ error: 'Missing or invalid prompt' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const relevantContext = getRelevantContext(prompt);
    const fullContext = `
You're a helpful AI assistant that answers questions about a portfolio website. Respond **only to the question**, in first-person tone as "Prathamjyot Singh". Be concise, structured, and informative.

✅ Use:
- Markdown
- Bullet points, short paragraphs
- Emojis when appropriate

My Background:

${relevantContext}

👉 Visitor's Question:
${prompt}
`;

    const isLocal = process.env.VERCEL !== '1' && process.env.NODE_ENV === 'development';

    if (isLocal) {
      try {
        const ollamaRes = await fetch('http://localhost:11434/api/generate', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            model: 'mistral',
            prompt: fullContext,
            stream: false,
          }),
        });
        
        if (!ollamaRes.ok) {
          throw new Error(`Ollama API error: ${ollamaRes.status}`);
        }
        
        const data = await ollamaRes.json();
        return Response.json({ answer: data.response });
      } catch (ollamaError) {
        console.error('❌ Ollama error, falling back to HF:', ollamaError);
        // Fall through to HF API
      }
    }

    // Hugging Face API call with better error handling
    console.log('🚀 Making HF API request...');
    
    const hfRes = await Promise.race([
      fetch(`https://api-inference.huggingface.co/models/${modelId}`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.HUGGINGFACE_API_KEY}`,
          'Content-Type': 'application/json',
          'User-Agent': 'NextJS-Portfolio-Assistant/1.0'
        },
        body: JSON.stringify({
          inputs: fullContext,
          parameters: {
            max_new_tokens: 300,
            temperature: 0.7,
            top_p: 0.9,
            return_full_text: false,
            do_sample: true,
            repetition_penalty: 1.1
          },
          options: { 
            wait_for_model: true,
            use_cache: false
          },
        }),
      }),
      new Promise<never>((_, reject) =>
        setTimeout(() => reject(new Error('⏰ Hugging Face API request timed out (30s)')), 30000)
      ),
    ]);
    
    console.log('📡 HF Response status:', hfRes.status);
    console.log('📡 HF Response headers:', Object.fromEntries(hfRes.headers.entries()));
    
    if (!hfRes.ok) {
      const errorText = await hfRes.text();
      console.error('❌ HF API Error Response:', errorText);
      
      // Handle specific HF errors
      if (hfRes.status === 503) {
        return Response.json({ 
          error: 'AI model is currently loading. Please try again in a moment.' 
        }, { status: 503 });
      }
      
      if (hfRes.status === 429) {
        return Response.json({ 
          error: 'Rate limit exceeded. Please try again later.' 
        }, { status: 429 });
      }
      
      throw new Error(`HF API Error ${hfRes.status}: ${errorText}`);
    }

    const hfData = await hfRes.json();
    console.log('🔍 Hugging Face Response:', JSON.stringify(hfData, null, 2));

    let answer = '';
    
    // Handle different response formats
    if (Array.isArray(hfData) && hfData.length > 0) {
      const firstResult = hfData[0];
      
      if (firstResult.generated_text) {
        answer = firstResult.generated_text;
      } else if (firstResult.output) {
        // For T5 models
        answer = firstResult.output;
      } else if (firstResult.text) {
        // Generic text field
        answer = firstResult.text;
      } else {
        console.error('❌ Unexpected response format:', firstResult);
        answer = 'I received an unexpected response format. Please try again.';
      }
    } else if (hfData.generated_text) {
      answer = hfData.generated_text;
    } else if (hfData.error) {
      console.error('❌ HF Model Error:', hfData.error);
      
      // Handle model loading errors
      if (hfData.error.includes('loading')) {
        return Response.json({ 
          error: 'AI model is currently loading. Please try again in a moment.' 
        }, { status: 503 });
      }
      
      throw new Error(`HF Model Error: ${hfData.error}`);
    } else {
      console.error('❌ Unknown response format:', hfData);
      answer = 'I received an unexpected response format. Please try again.';
    }

    // Clean up the response
    answer = answer.trim();
    
    if (!answer) {
      return Response.json({ 
        error: 'No response generated. Please try rephrasing your question.' 
      }, { status: 500 });
    }

    console.log('✅ Final answer:', answer.slice(0, 100) + '...');
    
    return Response.json({ answer });
    
  } catch (err: any) {
    console.error('❌ Error in /api/assistant:', err);
    console.error('❌ Stack trace:', err.stack);
    
    return new Response(JSON.stringify({
      error: 'AI service temporarily unavailable',
      details: process.env.NODE_ENV === 'development' ? err.message : undefined,
      timestamp: new Date().toISOString()
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
import { getEmbeddings } from '../lib/embed';
import { searchRelevantTexts } from '../lib/vector';

export async function getAnswer(prompt: string): Promise<string> {
  const relevantChunks = await searchRelevantTexts(prompt, 3);
  const context = relevantChunks.join('\n');

  const fullPrompt = `Use the following resume data to answer:\n\n${context}\n\nQuestion: ${prompt}`;

  const res = await fetch('http://localhost:11434/api/generate', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model: 'llama3.2',
      prompt: fullPrompt,
      stream: false
    })
  });

  const json = await res.json();
  return json.response.trim();
}

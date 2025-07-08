import axios from 'axios';

export async function getEmbeddings(texts: string[]): Promise<number[][]> {
  const embeddings: number[][] = [];

  for (const text of texts) {
    const res = await axios.post('http://localhost:11434/api/embeddings', {
      model: 'nomic-embed-text',
      prompt: text
    });

    embeddings.push(res.data.embedding);
  }

  return embeddings;
}

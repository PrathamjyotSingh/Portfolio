// lib/vector.ts
import { getEmbeddings } from './embed';
import { cosineSimilarity } from '@/utils/similarity';
import { education, experience, projects, achievements } from './data';

let cachedTexts: string[] = [];
let cachedEmbeddings: number[][] = [];

export async function initVectorStore() {
  if (cachedTexts.length > 0) return;

  cachedTexts = [
    ...education.map(e => `${e.degree} at ${e.institution}, CGPA: ${e.cgpa}`),
    ...experience.flatMap(e => [e.title, ...e.description]),
    ...projects.flatMap(p => [p.title, ...p.description]),
    ...achievements
  ];

  cachedEmbeddings = await getEmbeddings(cachedTexts);
}

export async function searchRelevantTexts(query: string, topK = 3): Promise<string[]> {
  await initVectorStore();

  const [queryEmbedding] = await getEmbeddings([query]);

  const scored = cachedEmbeddings.map((embedding, i) => ({
    index: i,
    score: cosineSimilarity(queryEmbedding, embedding)
  }));

  return scored
    .sort((a, b) => b.score - a.score)
    .slice(0, topK)
    .map(({ index }) => cachedTexts[index]);
}

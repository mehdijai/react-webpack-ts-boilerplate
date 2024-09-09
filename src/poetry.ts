export interface Poetry {
  title: string;
  author: string;
  lines: string[];
  linecount: string;
}

/**
 * Fetches a random piece of poetry from the PoetryDB API.
 * @returns A promise that resolves to a Poetry object.
 */
export async function getPoetry(): Promise<Poetry> {
  const response = await fetch("https://poetrydb.org/random");
  const data = await response.json();
  return data[0];
}

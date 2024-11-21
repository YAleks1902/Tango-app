const API_URL = 'https://icanhazdadjoke.com'; // make it env variable

export const fetchJokes = async (query: string): Promise<unknown> => {
  try {
    const response = await fetch(`${API_URL}/search?term=${query}`, {
      headers: { Accept: 'application/json' },
    });
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error fetching jokes:', error);
    throw error;
  }
};

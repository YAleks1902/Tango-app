import { useState, useEffect } from 'react';
import { Joke } from '../types';

const API_URL = 'https://icanhazdadjoke.com'; // TODO make it env variable
const cache: Map<string, Joke[]> = new Map();

export const useJokes = (query: string) => {
  const [jokes, setJokes] = useState<Joke[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (cache.has(query)) {
      setJokes(cache.get(query)!);
    } else if (query) {
      setIsLoading(true);
      fetch(`${API_URL}/search?term=${query}`, {
        headers: { Accept: 'application/json' },
      })
        .then((response: Response) => {
          if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          const jokes = data.results;
          setJokes(jokes);
          cache.set(query, jokes);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching jokes:', error);
          setJokes([]);
          setIsLoading(false);
          throw error;
        });
    }
  }, [query]);

  return { jokes, isLoading };
};

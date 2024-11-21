'use client';
import { useState } from 'react';
import { useJokes } from './hooks/useJokes';
import { useDebounce } from './hooks/useDebounce';
import SearchBar from './components/SearchBar';
import Dropdown from './components/Dropdown';
import { Joke } from './types';

export default function Home() {
  const [query, setQuery] = useState('');
  const [selectedJoke, setSelectedJoke] = useState<Joke | null>(null);

  const { jokes, isLoading } = useJokes(query);

   const debouncedSetQuery = useDebounce((value: string) => setQuery(value), 500);

  const handleSearch = (value: string) => {
    setSelectedJoke(null);
    debouncedSetQuery(value);
  };

  const handleSelect = (joke: Joke) => {
    setSelectedJoke(joke);
    setQuery('')
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-semibold mb-6 text-white-800 flex justify-center">
        Search jokes
      </h1>

      {selectedJoke && (
        <div className="flex justify-center mt-6 p-4 text-lg">
          {selectedJoke.joke}
        </div>
      )}

      <SearchBar
        onSearch={handleSearch}
        isLoading={!!query && isLoading}
        isDropdownOpen={!!query}
      />

      {jokes && query && !isLoading && (
        <Dropdown items={jokes} onSelect={handleSelect} />
      )}
    </div>
  );
}

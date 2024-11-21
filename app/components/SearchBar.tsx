import React, { ChangeEvent } from 'react';
import SearchBarIcon from './SearchBarIcon';

interface SearchBarProps {
  onSearch: (value: string) => void;
  isLoading: boolean;
  isDropdownOpen: boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({
  onSearch,
  isLoading,
  isDropdownOpen,
}) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Type to search jokes..."
        onChange={handleChange}
        className="search-bar w-full pl-10 pr-4 py-2 bg-black border-sky-950 border-2 rounded-lg p-3 focus:outline-none focus:border-sky-700 transition duration-300"
      />
      <SearchBarIcon isLoading={isLoading} isDropdownOpen={isDropdownOpen} />
    </div>
  );
};

export default SearchBar;

import React from 'react';
import { LoaderIcon, ArrowIcon } from '../icons/icons';

interface SearchBarIconProps {
  isLoading: boolean;
  isDropdownOpen: boolean;
}

const SearchBarIcon: React.FC<SearchBarIconProps> = ({
  isLoading,
  isDropdownOpen,
}) => {
  return (
    <div className="absolute right-3 top-1/3">
      {isLoading ? (
        <LoaderIcon className="h-5 w-5 text-sky-500" />
      ) : (
        <ArrowIcon isOpen={isDropdownOpen} className="h-5 w-5 text-sky-500" />
      )}
    </div>
  );
};

export default SearchBarIcon;

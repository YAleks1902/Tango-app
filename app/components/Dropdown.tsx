import React from 'react';
import { Joke } from '../types';

interface DropdownProps {
  items: Joke[];
  onSelect: (item: Joke) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ items, onSelect }) => {
  if (!items.length) return null;

  return (
    <div className="mt-2 border border-gray-300 rounded-md max-h-52 overflow-y-auto z-10 bg-slate-900">
      {items.map((item) => (
        <div
          key={item.id}
          className="p-3 cursor-pointer hover:bg-cyan-950 truncate"
          onClick={() => onSelect(item)}
        >
          {item.joke}
        </div>
      ))}
    </div>
  );
};

export default Dropdown;

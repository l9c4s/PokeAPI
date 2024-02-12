
import React from 'react';

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, onSearchChange }) => {
  return (
    <input
      type="text"
      placeholder="Search Pokemon"
      value={searchTerm}
      onChange={onSearchChange}
      className="p-2 m-2 border"
    />
  );
};

export default SearchBar;

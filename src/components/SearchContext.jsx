import React, { createContext, useState, useContext } from 'react';

// Create the context
const SearchContext = createContext();

// Custom hook to use the SearchContext
export const useSearch = () => {
  return useContext(SearchContext); // Returns the context value (searchQuery, updateSearchQuery)
};

// Provider component to wrap your app with the context
export const SearchProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState(""); // Manage search query in context

  // Function to update the search query
  const updateSearchQuery = (query) => {
    setSearchQuery(query);
  };

  // Provide the context value to all children
  return (
    <SearchContext.Provider value={{ searchQuery, updateSearchQuery }}>
      {children}
    </SearchContext.Provider>
  );
};

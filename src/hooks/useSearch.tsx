import { createContext, useContext, useState, useCallback, type ReactNode } from "react";

interface SearchContextType {
  query: string;
  setQuery: (q: string) => void;
  isSearching: boolean;
  setIsSearching: (v: boolean) => void;
}

const SearchContext = createContext<SearchContextType>({
  query: "",
  setQuery: () => {},
  isSearching: false,
  setIsSearching: () => {},
});

export function SearchProvider({ children }: { children: ReactNode }) {
  const [query, setQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  const handleSetQuery = useCallback((q: string) => {
    setQuery(q);
  }, []);

  return (
    <SearchContext.Provider
      value={{ query, setQuery: handleSetQuery, isSearching, setIsSearching }}
    >
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  return useContext(SearchContext);
}

import { createContext, useState, useContext, ReactNode, useEffect } from 'react';

type LoadingContextType = {
  isLoading: boolean;
  startLoading: () => void;
  endLoading: () => void;
};

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export function LoadingProvider({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  const startLoading = () => setIsLoading(true);
  const endLoading = () => setIsLoading(false);

  // Start with loading on first render
  useEffect(() => {
    // We leave it true, and component will call endLoading when ready
    return () => {
      // Clean up if needed
    };
  }, []);

  return (
    <LoadingContext.Provider value={{ isLoading, startLoading, endLoading }}>
      {children}
    </LoadingContext.Provider>
  );
}

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (context === undefined) {
    throw new Error('useLoading must be used within a LoadingProvider');
  }
  return context;
}
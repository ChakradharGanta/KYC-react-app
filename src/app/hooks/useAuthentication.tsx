import React, { useContext, createContext, useMemo, useState, useEffect } from 'react';

interface AuthContextParams {
  isAuthenticated?: boolean;
  currentPath: string;
  setCurrentPath: (path: string) => void;
  setIsAuthenticated?: (authenticated: boolean) => void;
}

interface AuthContextProviderProps {
  children: JSX.Element;
}

const initialValue = '/';

const AuthContext = createContext<AuthContextParams | null>(null);

function AuthContextProvider(props: AuthContextProviderProps) {
  console.log('authcontext');
  const [currentPath, setCurrentPath] = useState<string>(() => {
    try {
      console.log('in state');
      const path = window.sessionStorage.getItem('currentPath');
      return path ? JSON.parse(path) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const contextValue = useMemo(
    () => ({
      currentPath,
      setCurrentPath,
    }),
    [currentPath]
  );

  useEffect(() => {
    console.log('mounted', currentPath);
    return () => {
      console.log('unmounted');
      window.sessionStorage.setItem('currentPath', JSON.stringify(currentPath));
    };
  }, [currentPath]);

  return <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>;
}

export const useAuthentication = () => {
  const value = useContext(AuthContext);
  if (!value) {
    throw new Error('[Auth context] No provider');
  }

  return value;
};

export default AuthContextProvider;

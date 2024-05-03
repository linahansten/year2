'use client'
import { createContext, useContext, useState } from 'react';

const SessionContext = createContext();

export const SessionProvider = ({ children }) => {
  const [session, setSession] = useState(null);

  const login = (user) => {
    setSession(user);
  };

  const logout = () => {
    setSession(null);
  };

  return (
    <SessionContext.Provider value={{ session, login, logout }}>
      {children}
    </SessionContext.Provider>
  );
};

export const useSession = () => useContext(SessionContext);

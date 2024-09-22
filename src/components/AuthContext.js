import React, { useState, createContext, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({ name: "", isAuthenticated: false });

  const login = () => setUser({ name: "rohan", isAuthenticated: true });
  const signout = () => setUser({ name: "", isAuthenticated: false });

  return (
    <AuthContext.Provider value={{ user, login, signout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useAuth = () => useContext(AuthContext);

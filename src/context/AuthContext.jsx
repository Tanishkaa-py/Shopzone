import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    return localStorage.getItem("user") === "true";
  });

  const login = () => setUser(true);
  const logout = () => setUser(false);

  useEffect(() => {
    localStorage.setItem("user", user);
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
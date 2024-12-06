/* eslint-disable react/prop-types */
import { useState, createContext, useContext, useEffect } from "react";

const AuthUserContext = createContext(null);

// eslint-disable-next-line react-refresh/only-export-components
export const useAuthUser = () => {
  return useContext(AuthUserContext);
};

const getUserFromLocalStorage = () => {
  const authUser = localStorage.getItem("authUser");
  return JSON.parse(authUser);
};

export function AuthProvider({ children }) {
  const [authUser, setAuthUser] = useState(getUserFromLocalStorage);

  useEffect(() => {
    localStorage.setItem("authUser", JSON.stringify(authUser));
  }, [authUser]);

  return (
    <AuthUserContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthUserContext.Provider>
  );
}
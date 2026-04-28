import { createContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext({
  token: null,
  setToken: () => {},
  savedCustomerId : null
});

// eslint-disable-next-line react/prop-types
export default function AuthContextProvider({ children }) {
  const [token, setToken] = useState(null);
  const decodedToken = token ? jwtDecode(token) : null;

  const savedCustomerId =decodedToken?.customerId
    
  useEffect(() => {
    if (localStorage.getItem("tkn")) {
      setToken(localStorage.getItem("tkn"));
    }
  }, []);
  return (
    <AuthContext.Provider
      value={{
        token,
        setToken,
        savedCustomerId,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

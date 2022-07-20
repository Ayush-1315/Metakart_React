import { createContext, useContext, useEffect, useState } from "react";
const authContext = createContext();
const useAuth = () => useContext(authContext);
const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({ token: "", isAuth: false });
  const token = localStorage.getItem("token");
  const [showpass, setShowPass] = useState(false);

  useEffect(() => {
    if (token) {
      setAuth({ token, isAuth: true });
    } else {
      setAuth({ token: "", isAuth: false });
    }
  }, [token]);

  return (
    <authContext.Provider value={{ auth, setAuth, showpass, setShowPass }}>
      {children}
    </authContext.Provider>
  );
};
export { useAuth, AuthProvider };

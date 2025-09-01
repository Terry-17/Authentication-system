import React, { createContext, useState, useEffect} from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
 useEffect(() => {
    const storedUser = localStorage.getItem("username");
    if (storedUser) {
      setUser({ username: storedUser });
    }
  }, []);

 const [user, setUser] = useState(null);

   const login = (username) => {
    setUser({ username }); 
    localStorage.setItem("username", username);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("username");
  };

  return (<>
      <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  </>);
};

export default AuthProvider;

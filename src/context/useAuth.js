import React, { useState, useContext, createContext } from "react";

const apiUrl = process.env.REACT_APP_API_URL;

const authContext = createContext();

export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
  return useContext(authContext);
};

function useProvideAuth() {
  const [user, setUser] = useState(null);

  const signin = async (email, password) => {
    return await fetch(apiUrl + "/signin")
      .then((res) => {
        localStorage.setItem("token", res.user);
        setUser(res.user);
        return res.user;
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
  };

  const signup = async (name, email, user, password) => {
    return await fetch(apiUrl + "/signup")
      .then((res) => {
        setUser(res.user);
        return res.user;
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
  };

  const signout = () => {
    if (user) {
      localStorage.removeItem("token");
      window.location("/");
      setUser(false);
    }
    return;
  };

  return {
    user,
    signin,
    signup,
    signout,
  };
}

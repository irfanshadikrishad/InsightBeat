import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  let SERVER_URI = "https://insightbeat-son5.onrender.com";
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(localStorage.getItem("logger"));
  const [isLoggedIn, setIsLoggedIn] = useState(!!token);
  const defaultAvatar =
    "https://i.pinimg.com/564x/dd/1d/e6/dd1de6d91467f98928ede3a7798dbb23.jpg";

  // Comment this before deploy
  // SERVER_URI = "http://localhost:3001";

  const storeTokenInLS = (serverToken) => {
    return localStorage.setItem("logger", serverToken);
  };

  const deleteTokenInLS = () => {
    setUser(null); // empty out user
    return localStorage.removeItem("logger");
  };

  const authenticate = async () => {
    try {
      const request = await fetch(`${SERVER_URI}/api/auth/user`, {
        method: "GET",
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      const response = await request.json();
      if (request.status === 200) {
        setUser(response);
        setLoading(false);
      } else {
        setUser(null);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  function successToast(message) {
    toast.success(`${message}`, {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }
  function errorToast(message) {
    toast.error(`${message}`, {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }

  useEffect(() => {
    authenticate();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        storeTokenInLS,
        isLoggedIn,
        deleteTokenInLS,
        setIsLoggedIn,
        user,
        loading,
        token,
        SERVER_URI,
        defaultAvatar,
        authenticate,
        successToast,
        errorToast,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

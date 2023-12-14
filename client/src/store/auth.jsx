import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
    // eslint-disable-next-line no-unused-vars
    const [token, setToken] = useState(localStorage.getItem("logger"));
    const [isLoggedIn, setIsLoggedIn] = useState(!!token);

    const storeTokenInLS = (serverToken) => {
        return localStorage.setItem("logger", serverToken);
    }

    const deleteTokenInLS = () => {
        return localStorage.removeItem("logger");
    }

    return <AuthContext.Provider value={{ storeTokenInLS, isLoggedIn, deleteTokenInLS, setIsLoggedIn }}>
        {children}
    </AuthContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
    return useContext(AuthContext)
}
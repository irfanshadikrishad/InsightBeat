import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    // eslint-disable-next-line no-unused-vars
    const [token, setToken] = useState(localStorage.getItem("logger"));
    const [isLoggedIn, setIsLoggedIn] = useState(!!token);

    const storeTokenInLS = (serverToken) => {
        return localStorage.setItem("logger", serverToken);
    }

    const deleteTokenInLS = () => {
        return localStorage.removeItem("logger");
    }

    const authenticate = async () => {
        try {
            const request = await fetch("http://localhost:3000/api/auth/user", {
                method: "GET",
                headers: {
                    "Authorization": "Bearer " + token
                }
            })
            const response = await request.json();
            if (request.status === 200) {
                setUser(response)
            } else {
                setUser(null)
            }
        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(() => {
        authenticate();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return <AuthContext.Provider value={{
        storeTokenInLS,
        isLoggedIn,
        deleteTokenInLS,
        setIsLoggedIn,
        user
    }}>
        {children}
    </AuthContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
    return useContext(AuthContext)
}
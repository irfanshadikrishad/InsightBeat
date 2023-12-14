import { useEffect } from "react";
import { useAuth } from "../store/auth.jsx";
import { Navigate } from "react-router-dom";

export default function Logout() {
    const { deleteTokenInLS, setIsLoggedIn } = useAuth();

    useEffect(() => {
        deleteTokenInLS();
        setIsLoggedIn(false);
    }, [deleteTokenInLS, setIsLoggedIn])
    return <Navigate to="/login" />
}
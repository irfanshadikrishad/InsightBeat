import { useEffect } from "react";
import { useAuth } from "../store/auth.jsx";
import { Navigate } from "react-router-dom";

export default function Logout() {
    const { deleteTokenInLS } = useAuth();

    useEffect(() => {
        deleteTokenInLS();
    }, [deleteTokenInLS])
    return <Navigate to="/login" />
}
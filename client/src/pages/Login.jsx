import { useState } from "react";
import { useAuth } from "../store/auth.jsx";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Login() {
    const { storeTokenInLS, setIsLoggedIn } = useAuth();
    const navigate = useNavigate();
    const [login, setLogin] = useState({
        email: "",
        password: ""
    });
    const handleInput = (e) => {
        const { value, name } = e.target;
        setLogin({ ...login, [name]: value });
    }
    function errorToast(error) {
        toast.error(error, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    }
    const submit = async (e) => {
        e.preventDefault();
        const request = await fetch("http://localhost:3000/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(login)
        })
        const response = await request.json();
        if (request.status === 200) {
            storeTokenInLS(response.token);
            setIsLoggedIn(response.token);
            navigate("/");
        } else {
            errorToast(response.message);
        }
    }
    return <>
        <section className="container register">
            <div>
                <img
                    className="register_image"
                    src="/login.svg"
                    alt="login image"
                    draggable="false" />
            </div>
            <div>
                <h1>Login</h1>
                <form onSubmit={submit} className="register_form">
                    <input
                        onChange={handleInput}
                        name="email"
                        value={login.email}
                        type="email"
                        placeholder="Your Email" />
                    <input
                        onChange={handleInput}
                        name="password"
                        value={login.password}
                        type="password"
                        placeholder="Your Password"
                        autoComplete="on" />
                    <button type="submit">Login</button>
                </form>
            </div>
            <ToastContainer />
        </section>
    </>
}
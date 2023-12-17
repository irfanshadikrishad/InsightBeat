import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from "../store/auth.jsx";
import { useNavigate } from "react-router-dom";

export default function Register() {
    const { storeTokenInLS, setIsLoggedIn } = useAuth();
    const navigate = useNavigate();
    const [register, setRegister] = useState({
        name: "",
        email: "",
        username: "",
        password: ""
    });
    const handleInput = (e) => {
        const { value, name } = e.target;
        setRegister({ ...register, [name]: value });
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
        const request = await fetch("http://localhost:3000/api/auth/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(register)
        })
        const response = await request.json();
        if (request.status === 201) {
            storeTokenInLS(response.token);
            setIsLoggedIn(response.token);
            navigate("/");
        } else if (request.status === 412) {
            errorToast(JSON.parse(response.message)[0].message)
        } else {
            errorToast(response.message);
        }
    }
    return <>
        <section className="container register">
            <div>
                <img
                    className="register_image"
                    src="/register.svg"
                    alt="register image"
                    draggable="false" />
            </div>
            <div>
                <h1>Become an Author</h1>
                <form onSubmit={submit} className="register_form">
                    <input
                        name="name"
                        onChange={handleInput}
                        value={register.name}
                        type="text"
                        placeholder="Your Full Name" />
                    <input
                        name="email"
                        onChange={handleInput}
                        value={register.email}
                        type="email"
                        placeholder="Your Email" />
                    <input
                        name="username"
                        onChange={handleInput}
                        value={register.username}
                        type="text"
                        placeholder="Choose an Username" />
                    <input
                        name="password"
                        onChange={handleInput}
                        value={register.password}
                        type="password"
                        placeholder="Choose a Password"
                        autoComplete="on" />
                    <button type="submit">Register</button>
                </form>
            </div>
            <ToastContainer />
        </section>
    </>
}
import { useState } from "react"

export default function Login() {
    const [login, setLogin] = useState({
        email: "",
        password: ""
    });
    const handleInput = (e) => {
        const { value, name } = e.target;
        setLogin({ ...login, [name]: value });
    }
    const submit = (e) => {
        e.preventDefault();
        console.log(login);
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
        </section>
    </>
}
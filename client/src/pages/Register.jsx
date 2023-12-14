import { useState } from "react";

export default function Register() {
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
    const submit = (e) => {
        e.preventDefault();
        console.log(register);
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
        </section>
    </>
}
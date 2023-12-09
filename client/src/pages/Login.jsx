export default function Login() {
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
                <form className="register_form">
                    <input type="email" placeholder="Your Email" />
                    <input type="password" placeholder="Your Password" />
                    <button type="submit">Login</button>
                </form>
            </div>
        </section>
    </>
}
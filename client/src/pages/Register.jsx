export default function Register() {
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
                <form className="register_form">
                    <input type="text" placeholder="Your Full Name" />
                    <input type="email" placeholder="Your Email" />
                    <input type="text" placeholder="Choose an Username" />
                    <input type="password" placeholder="Choose a Password" />
                    <button type="submit">Register</button>
                </form>
            </div>
        </section>
    </>
}
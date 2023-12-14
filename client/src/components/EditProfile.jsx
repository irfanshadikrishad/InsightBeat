export default function EditProfile() {
    return <section className="edit_profile">
        <form className="edit_profile_form">
            <h1>&lt; Edit Profile &gt;</h1>
            <input type="url" placeholder="Avatar Url" />
            <input type="text" placeholder="Your Name" />
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Your Email" />
            <button type="submit">Save</button>
        </form>
    </section>
}
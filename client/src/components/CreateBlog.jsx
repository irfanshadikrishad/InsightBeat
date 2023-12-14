import { useState } from "react"

export default function CreateBlog() {
    const [create, setCreate] = useState({
        title: "",
        body: "",
        image: "",
        category: "Travel"
    })
    const handleInput = (e) => {
        const { value, name } = e.target;
        setCreate({ ...create, [name]: value });
    }
    return <section>
        <form className="create_form">
            <h1>&lt; Create a Blog &gt;</h1>
            <input onChange={handleInput} value={create.title} name="title" type="text" placeholder="Title" />
            <textarea onChange={handleInput} value={create.body} name="body" placeholder="Body" ></textarea>
            <input onChange={handleInput} value={create.image} name="image" type="url" placeholder="image url (optional)" />
            <div className="create_form_cat">
                <p>Category:</p>
                <select onChange={handleInput} value={create.category} name="category">
                    <option value="Travel">Travel</option>
                    <option value="Fashion">Fashion</option>
                    <option value="Beauty">Beauty</option>
                    <option value="Games">Games</option>
                    <option value="Politics">Politics</option>
                </select>
            </div>
            <button type="submit">Create</button>
        </form>
    </section>
}
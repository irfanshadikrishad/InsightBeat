import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from "../store/auth";

export default function CreateBlog() {
    const { user } = useAuth();
    const [create, setCreate] = useState({
        title: "",
        body: "",
        image: "",
        category: "Travel",
        author: user && user.username
    })
    const handleInput = (e) => {
        const { value, name } = e.target;
        setCreate({ ...create, [name]: value });
    }
    function errorToast(error) {
        toast.warn(error, {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    }
    function successToast(success) {
        toast.success(success, {
            position: "top-right",
            autoClose: 1000,
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
        const request = await fetch("https://insightbeat.up.railway.app/api/blog/create", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(create)
        })
        const response = await request.json();
        if (request.status === 201) {
            successToast(response.message);
            setCreate({
                title: "",
                body: "",
                image: "",
                category: "Travel",
                author: user && user.username
            })
        } else {
            errorToast(response.message);
        }
    }
    return <section>
        <form onSubmit={submit} className="create_form">
            <h1>&lt; Create a Blog &gt;</h1>
            <input
                onChange={handleInput}
                value={create.title}
                name="title" type="text"
                placeholder="Title"
            />
            <textarea
                onChange={handleInput}
                value={create.body}
                name="body"
                placeholder="Body" >
            </textarea>
            <input
                onChange={handleInput}
                value={create.image}
                name="image" type="url"
                placeholder="image url (optional)"
            />
            <div className="create_form_cat">
                <p>Category:</p>
                <select
                    onChange={handleInput}
                    value={create.category}
                    name="category">
                    <option value="Travel">Travel</option>
                    <option value="Fashion">Fashion</option>
                    <option value="Beauty">Beauty</option>
                    <option value="Games">Games</option>
                    <option value="Politics">Politics</option>
                    <option value="Lifestyle">Lifestyle</option>
                </select>
            </div>
            <button type="submit">Create</button>
        </form>
        <ToastContainer />
    </section>
}
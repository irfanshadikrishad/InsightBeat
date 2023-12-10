import { useState } from "react";
import Blog from "../components/Blog";

export default function Profile() {
    const [blogs, setBlogs] = useState(true);
    const [create, setCreate] = useState(false);
    return <>
        <section className="container">
            <section className="profile">
                <div className="profile_blogs_count">
                    <h1>15</h1>
                    <h4>Blogs</h4>
                </div>
                <div className="avatar">
                    <img src="/avatar.jpg"
                        alt="avatar"
                        draggable="false"
                        className="profile_avatar"
                    />
                    <h1>Cool Cat</h1>
                    <p>@coolcat</p>
                </div>
                <div className="profile_follower_count">
                    <h1>10k</h1>
                    <h4>Followers</h4>
                </div>
            </section>
            <section className="profile_relatables">
                <button onClick={() => {
                    setBlogs(true);
                    setCreate(false)
                }}>My Blogs</button>
                <button onClick={() => {
                    setBlogs(false);
                    setCreate(true)
                }}>Create Blog</button>
                <button>Edit Profile</button>
            </section>
            {blogs && <section>
                <h1 className="my_blogs">&lt; My Blogs &gt;</h1>
                <div className="blogs">
                    <Blog />
                    <Blog />
                    <Blog />
                    <Blog />
                    <Blog />
                    <Blog />
                </div>
            </section>}
            {create && <section>
                <form className="create_form">
                    <h1>&lt; Create a Blog &gt;</h1>
                    <input type="text" placeholder="Title" />
                    <textarea placeholder="Description" ></textarea>
                    <input type="url" placeholder="image url (optional)" />
                    <div className="create_form_cat">
                        <p>Category:</p>
                        <select>
                            <option value="Travel">Travel</option>
                            <option value="Fashion">Fashion</option>
                            <option value="Beauty">Beauty</option>
                            <option value="Games">Games</option>
                            <option value="Politics">Politics</option>
                        </select>
                    </div>
                    <button type="submit">Create</button>
                </form>
            </section>}
        </section>
    </>
}
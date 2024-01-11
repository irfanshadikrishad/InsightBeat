import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";

export default function ProfileHeader() {
    const [blogs, setBlogs] = useState();
    const { user } = useAuth();

    const GetBlogs = async () => {
        if (user) {
            const request = await fetch("https://insightbeat.up.railway.app/api/blog/personalblogcount",
                {
                    method: "POST",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ author: user.username })
                })
            const response = await request.json();
            if (request.status === 200) {
                setBlogs(response);
            } else {
                console.log(response);
            }
        }
    }
    useEffect(() => {
        GetBlogs();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user])
    return <section className="profile">
        <div className="profile_blogs_count">
            <h1>{blogs && blogs.count}</h1>
            <h4>Blogs</h4>
        </div>
        <div className="avatar">
            {user && <img src={user.avatar ? user.avatar : "https://i.pinimg.com/564x/ea/06/ff/ea06ff188085acfab02f046996afbe0e.jpg"}
                alt="avatar"
                draggable="false"
                className="profile_avatar"
            />}
            <h1>{user && user.name}</h1>
            <p>@{user && user.username}</p>
        </div>
        <div className="profile_follower_count">
            <h1>0</h1>
            <h4>Followers</h4>
        </div>
    </section>
}
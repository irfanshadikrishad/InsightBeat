import { useAuth } from "../store/auth";

export default function ProfileHeader() {
    const { user } = useAuth();
    return <section className="profile">
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
            <h1>{user && user.name}</h1>
            <p>@{user && user.username}</p>
        </div>
        <div className="profile_follower_count">
            <h1>10k</h1>
            <h4>Followers</h4>
        </div>
    </section>
}
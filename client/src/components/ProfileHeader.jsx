import { useAuth } from "../store/auth";

export default function ProfileHeader() {
  const { user, defaultAvatar } = useAuth();

  return (
    <section className="profile">
      <div className="profile_blogs_count">
        <h1>{user && user.blogs.length}</h1>
        <h4>Blogs</h4>
      </div>
      <div className="avatar">
        {user && (
          <img
            src={user.avatar ? user.avatar : defaultAvatar}
            alt="avatar"
            draggable="false"
            className="profile_avatar"
          />
        )}
        <h1>{user && user.name}</h1>
        <p>@{user && user.username}</p>
      </div>
      <div className="profile_follower_count">
        <h1>0</h1>
        <h4>Followers</h4>
      </div>
    </section>
  );
}

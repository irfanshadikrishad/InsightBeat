import { useEffect, useState } from "react";
import EditProfile from "../components/EditProfile";
import CreateBlog from "../components/CreateBlog";
import MyBlogs from "../components/MyBlogs";
import ProfileHeader from "../components/ProfileHeader";
import { useAuth } from "../store/auth";
import { Navigate } from "react-router-dom";

export default function Profile() {
  const { isLoggedIn } = useAuth();
  const [blogs, setBlogs] = useState(true);
  const [create, setCreate] = useState(false);
  const [edit, setEdit] = useState(false);

  // useEffect(() => {
  //   if (!isLoggedIn) {
  //     console.log(isLoggedIn);
  //     <Navigate to="/" replace={true} />;
  //   }
  // }, []);
  return (
    <>
      {isLoggedIn ? (
        <section className="container">
          <ProfileHeader />
          <section className="profile_relatables">
            <button
              onClick={() => {
                setBlogs(true);
                setCreate(false);
                setEdit(false);
              }}
            >
              My Blogs
            </button>
            <button
              onClick={() => {
                setBlogs(false);
                setCreate(true);
                setEdit(false);
              }}
            >
              Create Blog
            </button>
            <button
              onClick={() => {
                setBlogs(false);
                setCreate(false);
                setEdit(true);
              }}
            >
              Edit Profile
            </button>
          </section>
          {blogs && <MyBlogs />}
          {create && <CreateBlog />}
          {edit && <EditProfile />}
        </section>
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
}

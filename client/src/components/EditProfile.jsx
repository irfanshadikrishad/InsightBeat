import { useState } from "react";
import { useAuth } from "../store/auth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function EditProfile() {
  const { user, token, SERVER_URI, successToast, errorToast } = useAuth();
  const [edit, setEdit] = useState({
    id: user?._id,
    avatar: user?.avatar,
    name: user?.name,
    username: user?.username,
    email: user?.email,
  });
  const handleEdit = (e) => {
    const { name, value } = e.target;
    setEdit({ ...edit, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const request = await fetch(`${SERVER_URI}/api/auth/edit`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify({
        id: edit.id,
        avatar: edit.avatar,
        email: edit.email,
        name: edit.name,
        username: edit.username,
      }),
    });
    const response = await request.json();
    if (request.status === 200) {
      successToast(response.message);
    } else {
      errorToast(response.message);
    }
  };

  return (
    <section className="edit_profile">
      <form onSubmit={handleSubmit} className="edit_profile_form">
        <h1 className="profileHeader">&lt; Edit Profile &gt;</h1>
        <input
          name="avatar"
          onChange={handleEdit}
          type="url"
          placeholder="Avatar Url"
          value={edit.avatar}
        />
        <input
          name="name"
          onChange={handleEdit}
          type="text"
          placeholder="Your Name"
          value={edit.name}
        />
        <input
          name="username"
          onChange={handleEdit}
          type="text"
          placeholder="Username"
          value={edit.username}
        />
        <input
          name="email"
          onChange={handleEdit}
          type="email"
          placeholder="Your Email"
          value={edit.email}
        />
        <button type="submit">Update</button>
      </form>
      <ToastContainer />
    </section>
  );
}

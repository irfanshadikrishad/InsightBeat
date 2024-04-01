import { useAuth } from "../store/auth";
// Toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// Icons
import { BiEdit } from "react-icons/bi";
import { RiDeleteBin2Line } from "react-icons/ri";
import { FiArrowUpRight } from "react-icons/fi";

export default function MyBlogCard({ id, title, body }) {
  const { SERVER_URI, successToast, errorToast, authenticate } = useAuth();

  const delete_blog = async () => {
    const request = await fetch(`${SERVER_URI}/api/blog/delete`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });
    const response = await request.json();
    if (request.status === 200) {
      successToast(response.message);
      authenticate();
    } else {
      errorToast(response.message);
    }
  };

  return (
    <div className="my_single_blog">
      <a href={`/blog/${id}`}>
        {title} {<FiArrowUpRight />}
      </a>
      <p className="my_single_blog_desc">{`${String(
        body.slice(0, 100)
      )}...`}</p>
      <div className="my_blogs_buttons">
        <button>{<BiEdit />}</button>
        <button onClick={delete_blog}>{<RiDeleteBin2Line />}</button>
      </div>
      <ToastContainer />
    </div>
  );
}

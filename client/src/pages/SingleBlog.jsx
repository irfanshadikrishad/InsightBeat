import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../store/auth";
import Markdown from "react-markdown";
import { PiUserCirclePlusBold } from "react-icons/pi";

export default function SingleBlog() {
  const { SERVER_URI, defaultAvatar } = useAuth();
  const { id } = useParams();
  const [single, setSingle] = useState({});

  const GetSingle = async () => {
    const request = await fetch(`${SERVER_URI}/api/blog/single`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id }),
    });
    const response = await request.json();

    if (request.status === 200) {
      setSingle(response);
    } else {
      console.log(response.message);
    }
  };
  useEffect(() => {
    GetSingle();
  }, []);
  return (
    <section className="container singleBlog">
      {single && single.image && (
        <img
          src={single.image}
          alt="alt-img"
          draggable="false"
          className="singleBlogImage"
        />
      )}
      <h1 className="blogTitle">{single && single.title}</h1>
      <Markdown className="singleBody">{single && single.body}</Markdown>
      {single && (
        <div className="singleBlogAuthor">
          <div>
            <img
              className="authorImageSingleBlog"
              src={
                single.author && single.author.avatar
                  ? single.author.avatar
                  : defaultAvatar
              }
              alt="author-image"
              draggable="false"
            />
          </div>
          <div>
            <div className="author_name_single_blog">
              <p>{single.author && single.author.name}</p>
              <button className="author_follow">
                {<PiUserCirclePlusBold />}
              </button>
            </div>
            <p>{single && String(single.createdAt).slice(0, 10)}</p>
          </div>
        </div>
      )}
    </section>
  );
}

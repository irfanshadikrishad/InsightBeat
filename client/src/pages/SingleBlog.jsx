import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../store/auth";

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
      <p className="singleBody">{single && single.body}</p>
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
            <p>{single.author && single.author.name}</p>
            <p>{single && String(single.createdAt).slice(0, 10)}</p>
          </div>
        </div>
      )}
    </section>
  );
}

import { useState, useEffect } from "react";
import FooterArticle from "./FooterArticle";
import { useAuth } from "../store/auth";

export default function FooterHot() {
  const { SERVER_URI } = useAuth();
  const [editorsPick, setEditorsPick] = useState([]);

  const GetEditorsPick = async () => {
    const request = await fetch(`${SERVER_URI}/api/blog/editorspick`, {
      method: "GET",
    });
    const response = await request.json();
    if (request.status === 200) {
      setEditorsPick(response);
    } else {
      console.log(response.message);
    }
  };
  useEffect(() => {
    GetEditorsPick();
  }, []);
  return (
    <div>
      <div className="footer_header">
        <p>hot topics</p>
        <h1>Editor&apos;s pick</h1>
      </div>
      {editorsPick &&
        editorsPick.map(({ _id, title, category, createdAt, author }) => {
          return (
            <FooterArticle
              key={_id}
              title={String(title).slice(0, 40) + "..."}
              category={category}
              date={String(createdAt).slice(0, 10)}
              author={author}
              id={_id}
            />
          );
        })}
    </div>
  );
}

import { useState, useEffect } from "react";
import FooterArticle from "./FooterArticle";

export default function FooterHot() {
    const [editorsPick, setEditorsPick] = useState([]);

    const GetEditorsPick = async () => {
        const request = await fetch("http://localhost:3000/api/blog/editorspick",
            {
                method: "GET"
            })
        const response = await request.json();
        if (request.status === 200) {
            setEditorsPick(response)
        } else {
            console.log(response.message);
        }
    }
    useEffect(() => {
        GetEditorsPick();
    }, [])
    return <div>
        <div className="footer_header">
            <p>hot topics</p>
            <h1>Editor&apos;s pick</h1>
        </div>
        {editorsPick && editorsPick.map((edit) => {
            return <FooterArticle
                key={edit._id}
                title={String(edit.title).slice(0, 40) + "..."}
                category={edit.category}
                date={edit && String(edit.createdAt).slice(0, 10)}
                author={edit.author}
                id={edit._id}
            />
        })}
    </div>
}
import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"

export default function Feature() {
    const [feature, setFeature] = useState({});

    const feat = async () => {
        const request = await fetch("http://localhost:3000/api/blog/feature",
            {
                method: "GET"
            })
        const response = await request.json();
        if (request.status === 200) {
            setFeature(response);
        } else {
            console.log(response);
        }
    }
    useEffect(() => {
        feat();
    }, [])
    return <>
        <section className="feature">
            <img src={feature && feature.image}
                alt="travel"
                className="feature_img" />
            <div className="feature_right">
                <div>
                    <NavLink to={`/${feature.category}`} className="feature_cat">
                        {feature && feature.category}
                    </NavLink>
                    <a className="feature_title">
                        <h1>{feature && String(feature.title).slice(0, 33) + "..."}</h1>
                    </a>
                </div>
                <div className="feature_author">
                    <img className="feature_author_avatar"
                        src="https://i.pinimg.com/564x/ea/06/ff/ea06ff188085acfab02f046996afbe0e.jpg"
                        alt="avatar" />
                    <div className="feature_auth">
                        <p><span className="dim_i">
                            by </span><a>{feature && feature.author}</a></p>
                        <p className="feature_date">{feature && String(feature.createdAt).slice(0, 10)}</p>
                    </div>
                </div>
                <p className="feature_desc">{feature && String(feature.body).slice(0, 100) + "..."}</p>
                <div className="feature_continue_main">
                    <hr />
                    <div className="feature_continue">
                        <a href={`/blog/${feature._id}`}>Continue Reading &gt;</a>
                    </div>
                </div>
            </div>
        </section>
    </>
}
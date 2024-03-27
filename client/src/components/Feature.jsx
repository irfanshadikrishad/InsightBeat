import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../store/auth";

export default function Feature() {
  const { SERVER_URI, defaultAvatar } = useAuth();
  const [feature, setFeature] = useState({});

  const feat = async () => {
    const request = await fetch(`${SERVER_URI}/api/blog/feature`, {
      method: "GET",
    });
    const response = await request.json();
    if (request.status === 200) {
      setFeature(response);
    } else {
      console.log(response);
    }
  };

  useEffect(() => {
    feat();
  }, [setFeature]);
  return (
    <>
      {feature && (
        <section className="feature">
          {feature.image && (
            <img
              src={feature.image}
              alt="travel"
              className="feature_img"
              draggable="false"
            />
          )}
          <div className="feature_right">
            <div>
              <NavLink to={`/${feature.category}`} className="feature_cat">
                {feature && feature.category}
              </NavLink>
              <a href={`/blog/${feature._id}`} className="feature_title">
                {feature && (
                  <h1 className="featureTitle">
                    {String(feature.title).slice(0, 45) + "..."}
                  </h1>
                )}
              </a>
            </div>
            <div className="feature_author">
              <img
                className="feature_author_avatar"
                src={
                  feature.author && feature.author.avatar
                    ? feature.author.avatar
                    : defaultAvatar
                }
                alt="avatar"
              />
              <div className="feature_auth">
                <p>
                  <span className="dim_i">by </span>
                  <a>{feature.author && feature.author.name}</a>
                </p>
                <p className="feature_date">
                  {feature && String(feature.createdAt).slice(0, 10)}
                </p>
              </div>
            </div>
            <p className="feature_desc">
              {feature && String(feature.body).slice(0, 100) + "..."}
            </p>
            <div className="feature_continue_main"></div>
          </div>
        </section>
      )}
    </>
  );
}

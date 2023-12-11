import { NavLink } from "react-router-dom"

export default function Feature() {
    return <>
        <section className="feature">
            <img src="https://www.3forty.media/zosia/demo-6/wp-content/uploads/2022/03/hulki-okan-tabak-x3kQTL7yw30-unsplash-1024x683.jpg"
                alt="travel"
                className="feature_img" />
            <div className="feature_right">
                <div>
                    <NavLink to="/travel" className="feature_cat">
                        Travel
                    </NavLink>
                    <a href="" className="feature_title"><h1>Travel in the distant stars.</h1></a>
                </div>
                <div className="feature_author">
                    <img className="feature_author_avatar"
                        src="https://i.pinimg.com/564x/6a/90/58/6a90586e0639a63565bdf9947b943f04.jpg"
                        alt="avatar" />
                    <div className="feature_auth">
                        <p><span className="dim_i">
                            by </span><a>William Lewis</a></p>
                        <p className="feature_date">March 28, 2023</p>
                    </div>
                </div>
                <p className="feature_desc">Its sometimes her behaviour are contented. Do listening am eagerness oh objection collected. Together happy feelings continue juvenile had off..</p>
                <div className="feature_continue_main">
                    <hr />
                    <div className="feature_continue">
                        <a href="/">Continue Reading &gt;</a>
                    </div>
                </div>
            </div>
        </section>
    </>
}
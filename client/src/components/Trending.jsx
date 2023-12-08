import { NavLink } from "react-router-dom"

export default function Trending() {
    return <section className="trending_boxes">
        <div className="trending_box">
            <NavLink to="/travel" className="trending_cat">Travel</NavLink>
            <a><h3>Together happy fellings continue one had</h3></a>
            <div>
                <p>by <a>William Lewis</a> - March 28, 2022</p>
            </div>
        </div>
        {/* extra */}
        <div className="trending_box">
            <NavLink to="/travel" className="trending_cat">Travel</NavLink>
            <a><h3>Lorem ipsum dolor sit amet.</h3></a>
            <div>
                <p>by <a>William Lewis</a> - March 28, 2022</p>
            </div>
        </div>
        <div className="trending_box">
            <NavLink to="/travel" className="trending_cat">Travel</NavLink>
            <a><h3>Lorem ipsum dolor sit consectetur.</h3></a>
            <div>
                <p>by <a>William Lewis</a> - March 28, 2022</p>
            </div>
        </div>
        <div className="trending_box">
            <NavLink to="/travel" className="trending_cat">Travel</NavLink>
            <a><h3>Lorem ipsum dolor sit amet.</h3></a>
            <div>
                <p>by <a>William Lewis</a> - March 28, 2022</p>
            </div>
        </div>
    </section>
}
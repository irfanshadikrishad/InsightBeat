import { NavLink } from "react-router-dom";
import randomColor from "random-color";

export default function TrendingBox() {
    const color = randomColor();
    return <>
        <div className="trending_box">
            <NavLink to="/travel" className="trending_cat" style={{ backgroundColor: color.hexString() }}>Travel</NavLink>
            <a><h3>Together happy fellings continue one had</h3></a>
            <div className="trending_timeline">
                <p>by <a>William Lewis</a> - March 28, 2022</p>
            </div>
        </div>
    </>
}
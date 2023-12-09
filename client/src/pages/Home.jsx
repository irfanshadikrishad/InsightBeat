import Blogs from "../components/Blogs";
import Feature from "../components/Feature";
import Trending from "../components/Trending";

export default function Home() {
    return <section className="container">
        <Trending />
        <Feature />
        <Blogs />
        <div className="older_blogs">
            <a href="/">Older Blogs &gt;</a>
        </div>
    </section>
}
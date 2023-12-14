import Blog from "./Blog"

export default function MyBlogs() {
    return <section>
        <h1 className="my_blogs">&lt; My Blogs &gt;</h1>
        <div className="blogs">
            <Blog />
            <Blog />
            <Blog />
            <Blog />
            <Blog />
            <Blog />
        </div>
    </section>
}
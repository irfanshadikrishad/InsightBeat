import Blog from "./Blog";
import { useAuth } from "../store/auth";

export default function MyBlogs() {
  const { user } = useAuth();

  return (
    <section>
      <h1 className="my_blogs profileHeader">&lt; My Blogs &gt;</h1>
      <div className="blogs">
        {user &&
          user.blogs.map((blog) => {
            return (
              <Blog
                key={blog._id}
                title={blog.title.slice(0, 35) + "..."}
                body={blog.body.slice(0, 250) + "..."}
                author={blog.author && blog.author}
                date={blog.createdAt && blog.createdAt.slice(0, 10)}
                category={blog.category}
                id={blog._id}
                avatar={blog.author && blog.author.avatar}
              />
            );
          })}
      </div>
    </section>
  );
}

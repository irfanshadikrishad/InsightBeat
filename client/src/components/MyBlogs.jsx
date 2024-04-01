import { useAuth } from "../store/auth";
import MyBlogCard from "./MyBlogCard";

export default function MyBlogs() {
  const { user } = useAuth();

  return (
    <section>
      <h1 className="my_blogs profileHeader">&lt; My Blogs &gt;</h1>
      <section className="my_blogs_container">
        {user &&
          user.blogs.map(({ _id, title, body }) => {
            return <MyBlogCard key={_id} id={_id} title={title} body={body} />;
          })}
      </section>
    </section>
  );
}

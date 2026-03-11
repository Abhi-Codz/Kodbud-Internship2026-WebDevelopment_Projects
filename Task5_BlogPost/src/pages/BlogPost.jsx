import { useParams } from "react-router-dom";
import posts from "../data/posts";

const BlogPost = () => {
  const { id } = useParams();

  const post = posts.find((p) => p.id === parseInt(id));

  return (
    <div className="post-container">
      <h1>{post.title}</h1>

      <p className="meta">
        By {post.author} | {post.date}
      </p>

      <p className="post-content">{post.content}</p>
    </div>
  );
};

export default BlogPost;

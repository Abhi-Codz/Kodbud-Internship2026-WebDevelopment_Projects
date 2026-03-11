import { Link } from "react-router-dom";

const BlogCard = ({ post }) => {
  return (
    <div className="blog-card">
      <h2>{post.title}</h2>

      <p className="meta">
        By {post.author} | {post.date}
      </p>

      <p>{post.summary}</p>

      <Link to={`/post/${post.id}`}>
        <button className="read-btn">Read More</button>
      </Link>
    </div>
  );
};

export default BlogCard;

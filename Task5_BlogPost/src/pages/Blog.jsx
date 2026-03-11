import BlogCard from "../Components/BlogCard";
import posts from "../data/posts";

const Blog = () => {
  return (
    <div className="container">
      <h1 className="blog-title">Tech Insights Blog</h1>

      <div className="blog-grid">
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Blog;

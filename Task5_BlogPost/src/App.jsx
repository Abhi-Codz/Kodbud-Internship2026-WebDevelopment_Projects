import { BrowserRouter, Routes, Route, Link, useParams } from "react-router-dom";
import { useState } from "react";
import "./App.css";

const posts = [
  {
    id: 1,
    title: "How to Write a Screenplay",
    author: "John August",
    date: "February 12, 2024",
    preview: "Screenwriting is the art of telling a story visually. It requires structure, pacing, and dialogue that translates effectively to the screen.",
    content: "Screenwriting focuses on visual storytelling. Unlike novels, a screenplay communicates story through dialogue, action, and scene direction. Writers often start with a logline, develop characters, and structure their scripts using acts and turning points."
  },
  {
    id: 2,
    title: "Monday Cravings",
    author: "Samin Nosrat",
    date: "January 20, 2024",
    preview: "Food cravings often say something about our moods, memories, and habits. Mondays especially seem to invite comfort food.",
    content: "Food cravings are often emotional as much as physical. Chefs and writers frequently describe how food connects deeply to memory and comfort. Mondays can feel slow and reflective, so people often seek familiar meals that feel grounding."
  },
  {
    id: 3,
    title: "How PCB Chips are Manufactured",
    author: "IEEE Spectrum",
    date: "March 2, 2024",
    preview: "Modern electronics depend on printed circuit boards. The process of manufacturing them combines chemistry, precision engineering, and advanced fabrication.",
    content: "Printed circuit boards are created through complex fabrication processes including layering copper sheets, photolithography, chemical etching, drilling, plating, and assembly. These technologies power modern electronics from smartphones to satellites."
  },
  {
    id: 4,
    title: "Malthusean Theory of Economy",
    author: "Thomas Robert Malthus",
    date: "1798 (Original Theory)",
    preview: "The Malthusian theory suggests population growth tends to outpace food production, eventually creating economic pressure.",
    content: "Thomas Malthus argued that population increases geometrically while food production increases arithmetically. Without natural checks such as famine or disease, population pressure could strain resources and economic systems."
  }
];

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo-link">
        <h2 className="logo">DemiBlog</h2>
      </Link>
      <div className="nav-links">
        <Link to="/">Home</Link>
      </div>
    </nav>
  );
}

function Blog() {
  return (
    <div className="blog-layout">
      <main className="blog-main">
        {posts.map(post => (
          <article key={post.id} className="blog-post">
            <Link to={`/post/${post.id}`} className="title-link">
              <h1 className="post-title">{post.title}</h1>
            </Link>
            <div className="post-meta">
              <p className="post-author">By {post.author}</p>
              <p className="post-date">{post.date}</p>
            </div>
            <p className="post-preview">{post.preview}</p>
            <Link to={`/post/${post.id}`} className="read-link">
              READ MORE →
            </Link>
            <hr />
          </article>
        ))}
      </main>

      <aside className="blog-sidebar">
        <div className="sidebar-card">
          <h3>About This Blog</h3>
          <p>Thoughts on writing, technology, and economics. A small place for long-form ideas.</p>
        </div>
        <div className="sidebar-card">
          <h3>Popular Topics</h3>
          <ul className="topic-list">
            <li>Screenwriting</li>
            <li>Technology</li>
            <li>Economics</li>
            <li>Food & Culture</li>
          </ul>
        </div>
        <div className="sidebar-card">
          <h3>Newsletter</h3>
          <p>Get new posts directly in your inbox.</p>
          <input type="email" placeholder="Email address" />
          <button className="subscribe-btn">Subscribe</button>
        </div>
      </aside>
    </div>
  );
}

function BlogPost() {
  const { id } = useParams();
  const post = posts.find(p => p.id === parseInt(id));

  if (!post) return <div className="post-page">Post not found.</div>;

  return (
    <div className="post-page">
      <header className="post-header">
        <h1>{post.title}</h1>
        <div className="post-meta">
          <p className="post-author">By {post.author}</p>
          <p className="post-date">{post.date}</p>
        </div>
      </header>
      <div className="post-content">
        <p>{post.content}</p>
      </div>
      <Link to="/" className="back-link">
        ← Back to Blog
      </Link>
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-title">DemiBlog</p>
        <p className="footer-text">Live-share your Thoughts, Ideals, and Workflows.</p>
        <p className="copyright">© 2026 DemiBlog — All rights reserved</p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Blog />} />
        <Route path="/post/:id" element={<BlogPost />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
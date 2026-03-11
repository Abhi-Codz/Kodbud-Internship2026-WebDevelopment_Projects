import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="logo">DemiBlog</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
      </div>
    </nav>
  );
};

export default Navbar;

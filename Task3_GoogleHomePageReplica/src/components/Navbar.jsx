import { useContext } from "react";
import { UIContext } from "../context/UIContext";

function Navbar() {

  const { toggleTheme, theme } = useContext(UIContext);

  return (
    <div className="navbar">

      <div className="nav-right">

        <a href="#">Gmail</a>
        <a href="#">Images</a>

        <div className="profile">A</div>

      </div>

    </div>
  );
}

export default Navbar;
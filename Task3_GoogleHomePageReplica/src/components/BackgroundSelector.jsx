import { useContext } from "react";
import { UIContext } from "../context/UIContext";

function BackgroundSelector() {

  const { background, setBackground } = useContext(UIContext);

  return (
    <div className="background-selector">

      <button
        className={background === "default" ? "active" : ""}
        onClick={() => setBackground("default")}
      >
        Default
      </button>

      <button
        className={background === "gradient" ? "active" : ""}
        onClick={() => setBackground("gradient")}
      >
        Gradient
      </button>

      <button
        className={background === "ocean" ? "active" : ""}
        onClick={() => setBackground("ocean")}
      >
        Ocean
      </button>

      <button
        className={background === "sunset" ? "active" : ""}
        onClick={() => setBackground("sunset")}
      >
        Sunset
      </button>

    </div>
  );
}

export default BackgroundSelector;
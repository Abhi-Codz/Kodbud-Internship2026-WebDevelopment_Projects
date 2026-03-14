import { useContext } from "react";
import { UIContext } from "./context/UIContext";

import Navbar from "./components/Navbar";
import Logo from "./components/Logo";
import SearchBar from "./components/SearchBar";
import Buttons from "./components/Buttons";
import Footer from "./components/Footer";
import BackgroundSelector from "./components/BackgroundSelector";
import Shortcuts from "./components/Shortcuts";

import "./App.css";

function App() {

  const { theme, background } = useContext(UIContext);

  return (
<div className={`app ${theme} bg-${background}`}>

      <Navbar />

      <main className="main">
        <Logo />
        <SearchBar />
        <Buttons />
        <Shortcuts />
      </main>

      <BackgroundSelector />

      <Footer />

    </div>
  );
}

export default App;
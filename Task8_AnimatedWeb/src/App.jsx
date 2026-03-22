import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [activeFeature, setActiveFeature] = useState("impact");
  const [scrollY, setScrollY] = useState(0);
  
  

  /* NAVIGATION */
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToFeatures = () => {
    document.getElementById("features").scrollIntoView({
      behavior: "smooth",
    });
  };

  const scrollToTestimonials = () => {
    document.getElementById("testimonials").scrollIntoView({
      behavior: "smooth",
    });
  };

  /* SCROLL TRACKING */
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

/* TRANSFORM LOGIC */
// scrollY / 950 is usually the "sweet spot" for standard desktop layouts
const progress = Math.min(scrollY / 600, 1); 

// The 'Landed' state happens just before the progress hits 100%
const isLanded = progress > 0.90;

const transformStyle = {
  position: "fixed",
  top: "50%",
  right: "18%", // Adjusted to align with the new 1100px max-width
  zIndex: 900,
  pointerEvents: "none",
  opacity: isLanded ? 0 : 1, 
  transform: `
    translateY(${(progress * 42) - 50}%) 
    scale(${1 - progress * 0.18})
    rotate(${progress * 10}deg)
  `,
  transition: "opacity 0.2s ease-out",
};

  return (
    <div className="wrapper">
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">
            MURDOCK<span>OPTICS</span>
          </div>

          <div className="nav-links">
            <button className="nav-btn" onClick={scrollToTop}>
              Home
            </button>

            <button className="nav-btn" onClick={scrollToFeatures}>
              Features
            </button>

            <button className="nav-btn" onClick={scrollToTestimonials}>
              Testimonials
            </button>
          </div>
        </div>
      </nav>

      {/* FIXED TRANSITION GLASSES (THE ONES THAT DRAG DOWN) */}
      <div className="hero-glasses-wrapper" style={transformStyle}>
        <div className="glasses hero-glasses">
          <div className="frame-left">
            <div className="lens"></div>
          </div>
          <div className="bridge"></div>
          <div className="frame-right">
            <div className="lens"></div>
          </div>
        </div>
      </div>

      {/* HERO */}
      <header className="hero">
        <div className="hero-text">
          <span className="tagline">
            YOU'RE DAREDEVIL. NOT EVEN GOD CAN STOP THAT NOW.
          </span>
          <h1>
            <span className="muted">Let The</span>
            <span className="liquid-text">DEVIL OUT</span>
          </h1>
          <p>
            Precision engineered crimson lenses built for clarity in chaos.
          </p>
          <div className="hero-buttons">
            <button className="primary-btn" onClick={scrollToTestimonials}>
              Secure Your Pair
            </button>
            <button className="secondary-btn" onClick={scrollToFeatures}>
              Learn More
            </button>
          </div>
        </div>

        {/* Empty placeholder to keep hero layout balanced while glasses are fixed */}
        <div className="hero-visual" style={{ opacity: 0 }}>
           <div className="glasses"></div>
        </div>
      </header>

      {/* FEATURES */}
      <section id="features" className="features">
        <div className="feature-layout">
          {/* LEFT SIDEBAR */}
          <div className="feature-sidebar">
            <button
              className={activeFeature === "impact" ? "active" : ""}
              onMouseEnter={() => setActiveFeature("impact")}
            >
              Impact Guard
            </button>
            <button
              className={activeFeature === "crimson" ? "active" : ""}
              onMouseEnter={() => setActiveFeature("crimson")}
            >
              Crimson Filter
            </button>
            <button
              className={activeFeature === "noir" ? "active" : ""}
              onMouseEnter={() => setActiveFeature("noir")}
            >
              Noir Finish
            </button>
          </div>
    
          {/* RIGHT VISUAL (RECEIVES THE GLASSES) */}
          <div className="feature-visual" style={{ opacity: isLanded ? 1 : 0, transition: 'opacity 0.5s' }}>
            <div className={`glasses ${activeFeature}`}>
              <div className="frame-left">
                <div className="lens"></div>
              </div>
              <div className="bridge"></div>
              <div className="frame-right">
                <div className="lens"></div>
              </div>
            </div>

            <div className="feature-description">
              {activeFeature === "impact" && (
                <>
                  <h3>Impact Guard</h3>
                  <p>Reinforced outer shell engineered for impact resistance.</p>
                </>
              )}
              {activeFeature === "crimson" && (
                <>
                  <h3>Crimson Filter</h3>
                  <p>Red spectrum enhances clarity and cuts noise.</p>
                </>
              )}
              {activeFeature === "noir" && (
                <>
                  <h3>Noir Finish</h3>
                  <p>Stealth coating eliminates reflection.</p>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
<section id="testimonials" className="testimonials">
  <div className="section-title">
    <span className="eyebrow">Voices of Hell's Kitchen</span>
    <h2>Built for those who see <br/> what others can't.</h2>
  </div>

  <div className="testimonial-container">
    <div className="testimonial-card apple-card">
      <p className="quote">"These lenses cut through the chaos of the city. Precision I didn't think was possible."</p>
      <div className="author">
        <div className="avatar">M</div>
        <h4>Matt Murdock <span>Attorney at Law</span></h4>
      </div>
    </div>

    <div className="testimonial-card apple-card">
      <p className="quote">"Lightweight, durable, and discrete. They don't just look good; they feel like armor."</p>
      <div className="author">
        <div className="avatar">K</div>
        <h4>Karen Page <span>Bulletin Reporter</span></h4>
      </div>
    </div>

    <div className="testimonial-card apple-card">
      <p className="quote">"Finally, a pair of glasses that can keep up with a life this complicated."</p>
      <div className="author">
        <div className="avatar">F</div>
        <h4>Foggy Nelson <span>Partner</span></h4>
      </div>
    </div>
  </div>
</section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-content">
          <div>
            <h3>MURDOCK OPTICS</h3>
            <p>Engineered for the man without fear.</p>
          </div>
          <div className="footer-links">
            <a href="https://www.hotstar.com/in/shows/daredevil-born-again/1271337449?search_query=daredevil">About</a>
            <a href="https://www.magnoliclothiers.com/murdock-v2-sunglasses-glasses-p-1183.html">Specs</a>
            <a href="#">Contact</a>
          </div>
        </div>
        <p className="copyright">
          © 2026 Murdock Optics. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
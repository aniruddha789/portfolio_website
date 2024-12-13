import { useState } from "react";
import "./App.css";
import blackBG from "./assets/black_BG.jpg";
import linkedInICO from "./assets/linkedin icon.png";
import githubICO from "./assets/github-ico.png";
import instaICO from "./assets/insta-ico.png";

function App() {
  return (
    <div className="app-container">
      <nav className="navbar">
        <div className="nav-content">
          <div className="logo">
            <h1>Aniruddha Borkar</h1>
          </div>
          <ul className="nav-links">
            <li>
              <a href="#home">HOME</a>
            </li>
            <li>
              <a href="#about">ABOUT</a>
            </li>
            <li>
              <a href="#projects">PROJECTS</a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="social-sidebar">
        <a href="linkedin-link" className="social-link">
          <img src={linkedInICO} alt="LinkedIn" />
        </a>
        <a href="github-link" className="social-link">
          <img src={githubICO} alt="Github" />
        </a>
        <a href="instagram-link" className="social-link">
          <img src={instaICO} alt="Instagram" />
        </a>
      </div>

      <main
        className="main-content"
        style={{ backgroundImage: `url(${blackBG})` }}
      >
        <section id="home" className="hero-section">
          <h1>HEY, I'M ANIRUDDHA 👋</h1>
          <p className="hero-text">
            Hey There, I'm a Java Backend Developer from Hyderabad. I love to
            create scalable applications that would make life easy and enjoyable
            for people. I am currently working for TCS.
          </p>
          <a href="#projects" className="cta-button">
            PROJECTS
          </a>
        </section>

        {/* Other sections with content-container class */}
      </main>
    </div>
  );
}

export default App;

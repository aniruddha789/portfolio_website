import { useState } from 'react'
import './App.css'
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import  profilePic  from './assets/me.jpg'

function App() {
  return (
    <div className="app-container">
      <nav className="navbar">
        <div className="nav-content">
          <div className="logo">
            <a href="/">Aniruddha Borkar</a>
          </div>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      <main>
        <section id="home" className="hero-section">
          <div className="hero-content">
            <div className="hero-text-content">
              <h1>Building digital products, brands, and experiences.</h1>
              <p className="hero-text">
                A Software Engineer specializing in building exceptional digital experiences. 
                Currently, I'm focused on building accessible, human-centered products at TCS.
              </p>
              <div className="hero-links">
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                  <FaGithub /> GitHub
                </a>
                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin /> LinkedIn
                </a>
                <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
                  <FaTwitter /> Twitter
                </a>
                <a href="mailto:your.email@example.com">
                  <HiOutlineMail /> Email
                </a>
              </div>
            </div>
            <div className="hero-image">
              <img src= {profilePic} alt="Aniruddha Borkar" />
            </div>
          </div>
        </section>

        <section id="about" className="about-section">
          <h2>About Me</h2>
          <div className="about-content">
            <p>
              Hello! I'm Aniruddha, a software engineer based in Hyderabad, India. 
              I enjoy creating things that live on the internet, whether that be websites, 
              applications, or anything in between.
            </p>
            <p>
              Here are a few technologies I've been working with recently:
            </p>
            <ul className="skills-list">
              <li>Java</li>
              <li>Spring Boot</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Node.js</li>
              <li>SQL</li>
            </ul>
          </div>
        </section>

        <section id="experience" className="experience-section">
          <h2>Where I've Worked</h2>
          <div className="experience-content">
            <div className="job">
              <h3>Software Engineer</h3>
              <p className="company">TCS</p>
              <p className="duration">January 2022 - Present</p>
              <ul>
                <li>Developed and maintained critical backend infrastructure</li>
                <li>Collaborated with cross-functional teams to implement new features</li>
                <li>Optimized database queries improving performance by 40%</li>
              </ul>
            </div>
            {/* Add more job experiences as needed */}
          </div>
        </section>

        <section id="projects" className="projects-section">
          <h2>Some Things I've Built</h2>
          <div className="projects-grid">
            {/* Add your projects here */}
          </div>
        </section>

        <section id="contact" className="contact-section">
          <h2>Get In Touch</h2>
          <p>
            Whether you have a question or just want to say hi, I'll try my best 
            to get back to you!
          </p>
          <a href="mailto:your.email@example.com" className="contact-button">
            Say Hello
          </a>
        </section>
      </main>

      <footer>
        <p>Built by Aniruddha Borkar</p>
      </footer>
    </div>
  )
}

export default App

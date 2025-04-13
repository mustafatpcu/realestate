import React from "react";
import "./LandingPage.css";


const LandingPage = () => {
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <div className="landing-container">
        {/* Background Video */}
        <video
          className="background-video"
          src="/org404.mp4"
          autoPlay
          loop
          muted
        />

        {/* Overlay */}
        <div className="overlay">
          {/* Navigation Menu */}
          <nav className="navigation">
            <div className="logo-container">
              <img src="/org_logo.png" alt="Logo" className="logo-image" />
            </div>
            <ul className="nav-links">
              <li><strong>Home</strong></li>
              <li><strong>About</strong></li>
              <li><strong>Contact</strong></li>
            </ul>
          </nav>

          {/* Center Button */}
          <div className="center-button">
            <button onClick={scrollToBottom} className="explore-button">
              Explore More
            </button>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <section className="intro-section">
        <div className="intro-content">
          <h2>Welcome to Our World</h2>
          <p>
          Welcome to Our World, a real estate platform designed for everyone.
          Our site features a built-in <strong>voice assistant</strong> specially developed to support<strong> visually impaired users</strong>, making property browsing easier and more inclusive. 
          Whether you're looking to buy, rent, or explore, our assistant is here to guide you every step of the way.
          Experience real estate with accessibility at its core.
          </p>
        </div>
      </section>


      <section className="product-showcase">
        <div className="product-grid">
          <a href="/products/1" className="product-card">
            <img src="/housepic.png" alt="Product 1" className="product-image" />
            <h3 className="product-title">Product One</h3>
          </a>
          <a href="/products/2" className="product-card">
            <img src="/housepic.png" alt="Product 2" className="product-image" />
            <h3 className="product-title">Product Two</h3>
          </a>
          <a href="/products/3" className="product-card">
            <img src="/housepic.png" alt="Product 3" className="product-image" />
            <h3 className="product-title">Product Three</h3>
          </a>
          <a href="/products/4" className="product-card">
            <img src="/housepic.png" alt="Product 4" className="product-image" />
            <h3 className="product-title">Product Four</h3>
          </a>
        </div>
      </section>
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; {new Date().getFullYear()} ORG 404. All rights reserved.</p>
          <ul className="footer-links">
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/terms">Terms of Service</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;

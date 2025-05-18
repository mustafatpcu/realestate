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

  <section className="partnership-section">
  <h2>Our Partners</h2>
  <div className="scroll-container">
    <div className="logo-strip">
      <img src="/era.png" alt="Brand 1" />
      <img src="/keller.png" alt="Brand 2" />
      <img src="/zllow.png" alt="Brand 3" />
      <img src="/sahibinden.png" alt="Brand 4" />
      <img src="/realtor.png" alt="Brand 5" />
      {/* Duplicate logos for seamless looping */}
      <img src="/era.png" alt="Brand 1" />
      <img src="/keller.png" alt="Brand 2" />
      <img src="/zllow.png" alt="Brand 3" />
      <img src="/sahibinden.png" alt="Brand 4" />
      <img src="/realtor.png" alt="Brand 5" />

      
    </div>
  </div>
</section>


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
          <a href="/details" className="product-card">
            <img src="/2.jpg" alt="Product 1" className="product-image" />
            <h3 className="product-title">3018 W Morrell St, Jackson, MI 49203</h3>
          </a>
          <a href="#s" className="product-card">
            <img src="/other1.jpg" alt="Product 2" className="product-image" />
            <h3 className="product-title">120 Charles St, Jackson, MI 49203</h3>
          </a>
          <a href="#s" className="product-card">
            <img src="/other2.jpg" alt="Product 3" className="product-image" />
            <h3 className="product-title">4175 Springport Rd</h3>
          </a>
          <a href="#s" className="product-card">
            <img src="/other3.jpg" alt="Product 4" className="product-image" />
            <h3 className="product-title">Jackson, MI 49201</h3>
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

// HouseDetails.js
import { useState } from 'react';
import './HouseDetails.css';
import roundButtonImg from './round.png';

const dummyImages = [
    "/pic1.png",
  "/pic2.png",
  "/pic3.png",
  "/pic4.png",
  "/pic5.png",
  ];

export default function HouseDetails() {
  const [currentImage, setCurrentImage] = useState(0);
  const [audioPlaying, setAudioPlaying] = useState(false);

  const toggleAudio = () => {
    setAudioPlaying(!audioPlaying);
    // Integrate actual audio logic here
  };

  const nextImage = () => setCurrentImage((currentImage + 1) % dummyImages.length);
  const prevImage = () => setCurrentImage((currentImage - 1 + dummyImages.length) % dummyImages.length);

  return (
    <div className="hd-container">
      <nav className="hd-navbar">
  <div className="hd-logo">🏠 ORG 404</div>
  <ul className="hd-nav-links">
    
    <li><a href="#location">Home</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
</nav>

      <div className="hd-top-section">
        <div className="hd-main-image-box">
          <img src={dummyImages[currentImage]} alt="Property" className="hd-main-image" />
          <div className="hd-thumbnails">
            <button onClick={prevImage} className="hd-thumb-nav" aria-label="Previous">&lt;</button>
            {dummyImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Thumb ${index + 1}`}
                className={`hd-thumbnail ${index === currentImage ? 'active' : ''}`}
                onClick={() => setCurrentImage(index)}
              />
            ))}
            <button onClick={nextImage} className="hd-thumb-nav" aria-label="Next">&gt;</button>
          </div>
        </div>
        <div className="audio-panel">
  <div className="audio-header">🎧 Smart Audio Assistant</div>
  <button className="audio-button" onClick={toggleAudio} aria-label="Toggle Audio">
   <img src={roundButtonImg} alt="Toggle Audio" className="audio-icon" />
  </button>
  <div className="audio-status">{audioPlaying ? 'Now Playing 🎶' : 'Audio Paused ⏸️'}</div>
</div>

      </div>

      <div className="summary-section">
  <h2 className="summary-header">🏡 Property Features</h2>
  <p className="summary-description">
    This beautiful 4-bedroom, 3-bath home features an open-concept layout, a modern kitchen with an island,
    a spacious backyard, and a 2-car garage.
  </p>

  <h2 className="summary-header">📍 Location</h2>
  <p className="summary-description">
    Located in the heart of the city, with close proximity to parks, schools, and shopping centers.
  </p>
</div>

    </div>
  );
}

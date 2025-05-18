import { useState, useRef } from 'react';
import './HouseDetails.css';
import roundButtonImg from './round.png';

const dummyImages = [
  "/1.jpg",
  "/2.jpg",
  "/3.jpg",
  "/4.jpg",
  "/5.jpg",
  "/6.jpg",
  "/7.jpg",
  "/8.jpg",
  "/9.jpg",
];

export default function HouseDetails() {
  const [currentImage, setCurrentImage] = useState(0);
  const [audioPlaying, setAudioPlaying] = useState(false);
  const audioRef = useRef(null); // Reference to the audio element

  const toggleAudio = () => {
    if (audioPlaying) {
      audioRef.current.pause(); // Pause the audio if it's playing
    } else {
      audioRef.current.play(); // Play the audio if it's paused
    }
    setAudioPlaying(!audioPlaying); // Toggle the audioPlaying state
  };

  const nextImage = () => setCurrentImage((currentImage + 1) % dummyImages.length);
  const prevImage = () => setCurrentImage((currentImage - 1 + dummyImages.length) % dummyImages.length);

  return (
    <div className="hd-container">
      <nav className="hd-navbar">
        <div className="hd-logo">🏠 ORG 404</div>
        <ul className="hd-nav-links">
          <li><a href="/">Home</a></li>
          
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
          {/* Audio element */}
          <audio ref={audioRef} src="/audio.mp3" preload="auto" />
        </div>
      </div>

      <div className="summary-section">
         <h2 className="summary-header">💲 Price   $249,000</h2>
        <p className="summary-description price">
          
        </p>

        <h2 className="summary-header">🏡 Property Features</h2>
        <p className="summary-description">
          3-bedroom, 1.5-bathroom ranch-style home in Jackson, MI.
          Located on just over 1/2 acre of land with no homes directly behind it, offering privacy and scenic views.
          Built in 1970, with a total of 1696 square feet of living space, all on one level.
          Vinyl siding for low-maintenance exterior.
        </p>

        {/* Price Section */}
       
        <h2 className="summary-header">📍 Location</h2>
        <p className="summary-description">
          This home is situated at 3018 West Morrell Street in Jackson, Michigan, offering a serene residential setting with the benefit of privacy and natural surroundings. The property sits on just over half an acre, providing ample outdoor space while maintaining a peaceful atmosphere. There are no homes directly behind the house, allowing for unobstructed views and a connection with local wildlife, ideal for those who appreciate quiet living and nature.
        </p>
      </div>
    </div>
  );
}

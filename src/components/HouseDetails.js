import React, { useState } from "react";
import "./HouseDetails.css";
import { ArrowLeft, ArrowRight } from "lucide-react";

const dummyImages = [
  "/pic1.png",
  "/pic2.png",
  "/pic3.png",
  "/pic4.png",
  "/pic5.png",
  "/pic6.png",
  "/pic7.png"
];

const HouseDetails = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? dummyImages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === dummyImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="house-details-container">
  <div className="main-section">
    <div className="gallery-section">
      <div className="featured-image">
        <img src={dummyImages[currentIndex]} alt="House" />
        <button className="nav-button left" onClick={handlePrev}>
          <ArrowLeft size={20} />
        </button>
        <button className="nav-button right" onClick={handleNext}>
          <ArrowRight size={20} />
        </button>
      </div>

      <div className="thumbnails">
        {dummyImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Thumbnail ${index + 1}`}
            className={index === currentIndex ? "active" : ""}
            onClick={() => handleThumbnailClick(index)}
          />
        ))}
      </div>
    </div>

    <div className="action-section">
      <button className="schedule-button">Schedule a Visit</button>
    </div>
  </div>

  <div className="description-section">
    <h2>Property Description</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
      vestibulum, nulla non feugiat suscipit, urna risus elementum nibh, a
      sagittis neque nisi in odio. Sed porttitor lorem non lacus luctus,
      vitae facilisis tortor vulputate. In viverra libero a commodo
      scelerisque.
    </p>
  </div>
</div>

  );
};

export default HouseDetails;

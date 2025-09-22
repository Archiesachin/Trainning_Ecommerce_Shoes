import {useEffect, useState} from 'react'
import './homepage.css'


const Homepage = ({ interval = 3000 }) => {
  // Define your images here
  const images = [
    "./images/homepage/hero-image-red.png",
    "./images/homepage/hero-image-blue.png",
    "./images/homepage/hero-image-green.png"
    // Add more image URLs as needed
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer); // Cleanup on unmount
  }, [images.length, interval]);

  return (
    <div style={{ position: "relative", width: "100%", overflow: "hidden" }}>
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index}`}
          style={{
            display: index === currentIndex ? "block" : "none",
            width: "100%",
            height: "auto",
          }}
        />
      ))}
    </div>
  );
};

export default Homepage;

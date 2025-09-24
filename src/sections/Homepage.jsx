import {useEffect, useState} from 'react'
import './homepage.css'
import CategoryHomepage from '../components/CategoryHomepage';
import Collection from '../components/Collection';
import GridHomepage from '../components/gridHomepage';



const Homepage = ({ interval = 3000 }) => {



  // Define your images here
  const images = [
    "./images/homepage/hero-image-red.png",
    "./images/homepage/hero-image-blue.png",
    "./images/homepage/hero-image-green.png"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer); // Cleanup on unmount
  }, [images.length, interval]);

  return (
    <>
    <div className='hero-container'>
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index}`}
          style={{
            display: index === currentIndex ? "block" : "none"}}
          className='slideshow-img'
        />
      ))}
      <div className="text-part">
      <p>The new wool cruiser collection</p>
      <h4>Cruise in color</h4>
      <div className="buttons">
        <button>Shop Men</button>
        <button>Shop Women</button>
      </div>
      </div>  
    </div>


<CategoryHomepage/>
<GridHomepage />
<Collection />

    </>
  );
};

export default Homepage;

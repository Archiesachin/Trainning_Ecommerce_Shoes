
import React, { useState, useEffect } from 'react';
import './ChangingLayout.css';

const themes = [
  {
    label: "BOLD BY NATURE",
    leftImg: "./images/Products/A11837_25Q3_Wool-Cruiser-NZ-Light-Blue-Natural-White-Sole_PDP_LEFT__1_1.png",
    title: "New Wool Cruiser Collection",
    description: "19 bold colors in super soft recycled Italian felt wool",
    buttons: [
      { label: "Shop Men", link: "/men" },
      { label: "Shop Women", link: "/women" }
    ],
    rightImg: "./images/homepage/carousel/Carousel-blue.png"
  },
  {
    label: "BOLD BY NATURE",
    leftImg: "./images/Products/A11882_25Q3_Wool-Cruiser-Sulphur-Natural-White-Sole_PDP_LEFT_6c048dbc-34ee-40b7-9e3b-4ff1b89f45cb.png",
    title: "New Wool Cruiser Collection",
    description: "19 bold colors in super soft recycled Italian felt wool",
    buttons: [
      { label: "Shop Men", link: "/men" },
      { label: "Shop Women", link: "/women" }
    ],
    rightImg: "./images/homepage/carousel/carousel-yellow.png"
  },
  {
    label: "COMFORT BY NATURE",
    leftImg: "./images/Products/A11959_25Q3_Tree_Runner_NZ_Medium_Grey_Blizzard_Sole_PDP_LEFT-2000x2000_f6ff6164-62df-42dc-89a8-fabcb3b5d438.png",
    title: "Tree Runner NZ",
    description: "Minimal, modern, and miraculously comfortable",
    buttons: [
      { label: "Shop Men", link: "/men" },
      { label: "Shop Women", link: "/women" }
    ],
    rightImg: "./images/homepage/carousel/carousel-grey.png"
  },
  {
    label: "COMFORT BY NATURE",
    leftImg: "./images/Products/A11789_25Q3_Tree_Runner_Go_Utility_Natural_Black_Dark_Jungle_Natural_White_Sole_PDP_LEFT-2000x2000.png",
    title: "Tree Dasher 2",
    description: "Breathable comfort for everyday performance",
    buttons: [
      { label: "Shop Men", link: "/men" },
      { label: "Shop Women", link: "/women" }
    ],
    rightImg: "./images/homepage/carousel/Carousel-black.png"
  }
];

const ChangingLayout = () => {
  const [themeIndex, setThemeIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setThemeIndex((prevIndex) => (prevIndex + 1) % themes.length);
    }, 5000);

    return () => clearInterval(timer); 
  }, []);

  const theme = themes[themeIndex];

  return (
    <div className="changing-container">
      <div className="left-container">
        <p>{theme.label}</p>
        <div className="left-image">
          <img src={theme.leftImg} alt="" />
        </div>
        <h3>{theme.title}</h3>
        <p>{theme.description}</p>
        <div className="changing-button">
          {theme.buttons.map((btn, idx) => (
            <button key={idx}>{btn.label}</button>
          ))}
        </div>
      </div>
      <div className="right-container">
        <img src={theme.rightImg} alt="" />
      </div>
    </div>
  );
};

export default ChangingLayout;

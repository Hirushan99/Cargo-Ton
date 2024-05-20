import React, { useEffect, useState } from 'react';
import SliderText from '../../Components/Slider/SliderText';
import '../../Styles/Slider/Slider.css';
import containers from "../../assests/Slider/containers.jpg";
import unloading from "../../assests/Slider/unloading.jpg";

function Slider() {
  const [imageIndex, setImageIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0);

  const images = [containers, unloading]; // Add additional images here
  const texts = [
    {
      title1: "Your Partner",
      title2: "in Shipping",
      description: "Cargo transportation is a vital component of global trade, facilitating the movement of goods across vast distances efficiently. Whether by land, sea, or air, cargo logistics networks ensure timely delivery of products, linking producers with consumers worldwide. "
    },
    {
      title1: "Best Shipping",
      title2: "Partner",
      description: "From towering cargo ships navigating international waters to swift planes soaring through the skies, the efficient movement of cargo is essential for sustaining global trade and meeting consumer demands."
    },
    // Add more objects for additional texts
  ];

  const totalImages = images.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % totalImages);
      setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [totalImages, texts]);

  const changeImage = () => {
    setImageIndex((prevIndex) => (prevIndex + 1) % totalImages);
    setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
  };

  return (
    <div className="container">
      <div className="slider-text">
        <SliderText text={texts[textIndex]} />
      </div>
      <div className="slider-image">
        <img src={images[imageIndex]} alt="Images in slider" />
      </div>
      <div className='Click-Me_button'>
        <button onClick={changeImage}>Click Me</button>
      </div>
    </div>
  );
}

export default Slider;
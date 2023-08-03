import React, { useState, useEffect, useRef } from "react";
import template1 from "../../assets/images/template1.png";
import template2 from "../../assets/images/template2.png";
import template3 from "../../assets/images/template3.png";

const featuredProducts = [template1, template2, template3];

let count = 0;
let slideInterval;
export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideRef = useRef();

  const removeAnimation = () => {
    slideRef.current.classList.remove("fade-anim");
  };

  useEffect(() => {
    slideRef.current.addEventListener("animationend", removeAnimation);

    startSlider();
    return () => {
      pauseSlider();
    };
    // eslint-disable-next-line
  }, []);

  const startSlider = () => {
    slideInterval = setInterval(() => {
      handleNext();
    }, 2000);
  };

  const pauseSlider = () => {
    clearInterval(slideInterval);
  };

  const handleNext = () => {
    count = (count + 1) % featuredProducts.length;
    setCurrentIndex(count);
    slideRef.current.classList.add("fade-anim");
  };

  return (
    <div ref={slideRef} className="template-slider-wrapper">
      <div className="template-slider-images">
        <img src={featuredProducts[currentIndex]} alt="" />
      </div>
    </div>
  );
}

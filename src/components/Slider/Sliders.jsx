import { useState } from "react";
import Slideritems from "./Slideritems";
import "./Sliders.css";
const Sliders = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % 3);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + 3) % 3);
  };
  return (
    <section className="slider">
      <div className="slider-elements">
        {currentSlide === 0 && (
          <Slideritems imageSrc="img/slider/slider1.jpg" />
        )}
        {currentSlide === 1 && (
          <Slideritems imageSrc="img/slider/slider2.jpg" />
        )}
        {currentSlide === 2 && (
          <Slideritems imageSrc="img/slider/slider3.jpg" />
        )}

        <div className="slider-buttons">
          <button onClick={prevSlide}>
            <i className="bi bi-chevron-left"></i>
          </button>
          <button onClick={nextSlide}>
            <i className="bi bi-chevron-right"></i>
          </button>
        </div>
        <div className="slider-dots">
          <button
            className={'slider-dot ${currentSlide === 0 ?  "active" : ""} '}
            onClick={()=> setCurrentSlide(0)}
          >
            <span></span>
          </button>
          <button
            className={'slider-dot ${currentSlide === 1 ?  "active" : ""} '}
            onClick={()=> setCurrentSlide(1)}
          >
            <span></span>
          </button>
          <button
            className={'slider-dot ${currentSlide === 2 ?  "active" : ""} '}
            onClick={()=> setCurrentSlide(2)}
          >
            <span></span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Sliders;

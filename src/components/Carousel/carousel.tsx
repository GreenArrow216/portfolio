import { useState } from "react";
import "./carousel.css";

export type CarouselObj = {
    id: number;
    image: string;
    title: string;
    description: string;
  }

type CarouselProps = {
  carouselArr: CarouselObj[];
};

const Carousel = ({ carouselArr }: CarouselProps) => {
  // const {}
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % carouselArr.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) =>
      prev === 0 ? carouselArr.length - 1 : prev - 1
    );
  };

  return (
    <div className="carousel">
      <div className="carousel-content">
        {carouselArr.map((item, index) => (
          <div
            key={index}
            className={`carousel-item ${index === activeIndex ? "active" : ""}`}
          >
            <img src={item.image} alt={item.title} />
            <div className="carousel-overlay">
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="carousel-pagination">
        {carouselArr.map((_, index) => (
          <span
            key={index}
            className={`pagination-dot ${
              index === activeIndex ? "active" : ""
            }`}
            onClick={() => setActiveIndex(index)}
          ></span>
        ))}
      </div>

      <div className="carousel-controls">
        <button className="carousel-arrow left" onClick={handlePrev}>
          &#8592;
        </button>
        <button className="carousel-arrow right" onClick={handleNext}>
          &#8594;
        </button>
      </div>

     
    </div>
  );
};

export default Carousel;

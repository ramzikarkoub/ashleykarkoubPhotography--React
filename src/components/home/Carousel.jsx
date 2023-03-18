import React, { useState } from "react";
import "./carousel.scss";
import Button from "react-bootstrap/Button";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    if (currentIndex === 0) {
      setCurrentIndex(images.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNextClick = () => {
    if (currentIndex === images.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="carousel-container">
      <div
        className="carousel-image"
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
      ></div>
      <div className="description">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut magni
          non quas aliquam odit atque ducimus? Tempora similique mollitia . book
          you wedding todas aliquam odit atque ducimus? Tempora similique
          mollitia . book you wedding today and get 20% OFF!!!
        </p>

        <div class="col-md-12 text-center mb-2">
          <Button
            type="submit"
            // variant="dark"
            className="btn-warning"
            onClick={(event) => (window.location.href = "#contact")}
          >
            Book here!
          </Button>
        </div>
      </div>

      <button className="carousel-prev" onClick={handlePrevClick}>
        &#10094;
      </button>
      <button className="carousel-next" onClick={handleNextClick}>
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;

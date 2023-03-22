import React, { useState } from "react";
import "./carousel.scss";
import Button from "react-bootstrap/Button";

const data = [
  {
    src: "https://tabler.io/samples/photos/city-lights-reflected-in-the-water-at-night.jpg",
    alt: "Slide One",
    caption:
      "This is the captionription of slide one Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi quos quas, voluptatum nesciunt illum exercitationem.",
  },
  {
    src: "../../../assets/arr.jpg",
    alt: "Slide Two",
    caption:
      "This is the description of slide two Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi quos quas, voluptatum nesciunt illum exercitationem.",
  },
  {
    src: "../assets/field.jpg",
    alt: "Slide Three",
    desc: "This is the description of slide three Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi quos quas, voluptatum nesciunt illum exercitationem.",
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    // if (currentIndex === 0) {
    //   setCurrentIndex(sliderData.length - 1);
    // } else {
    //   setCurrentIndex(currentIndex - 1);
    // }
    currentIndex === 0
      ? setCurrentIndex(data.length - 1)
      : setCurrentIndex(currentIndex - 1);
  };
  {
  }

  const handleNextClick = () => {
    currentIndex === data.length - 1
      ? setCurrentIndex(0)
      : setCurrentIndex(currentIndex + 1);
  };

  return (
    <div className="carousel-container">
      <div
        className="carousel-image"
        style={{ backgroundImage: `url(${data[currentIndex].src})` }}
      ></div>
      <div className="description">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut magni
          non quas aliquam odit atque ducimus? Tempora similique mollitia . book
          you wedding todas aliquam odit atque ducimus? Tempora similique
          mollitia . book you wedding today and get 20% OFF!!!
        </p>

        <div className="col-md-12 text-center mb-2">
          <Button
            type="submit"
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

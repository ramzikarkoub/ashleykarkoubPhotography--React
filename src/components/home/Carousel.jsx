import React, { useState, useEffect } from "react";
import "./carousel.scss";
import Button from "react-bootstrap/Button";

const data = [
  {
    src: "../../../assets/bk1.jpg",
    alt: "Capture you weddings ",
    caption:
      "This is the captionription of slide one Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi quos quas, voluptatum nesciunt illum exercite Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi quos quas, voluptatum nesciunt illum exercite Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi quos quas, voluptatum nesciunt illum exercitationem.",
  },
  {
    src: "../assets/isla2.jpg",
    alt: "Book your new born session today!",
    caption:
      "This is the description of slide three Lorem ipsum dolor, sit amet consectetLorem ipsum dolor, sit amet consectetLorem ipsum dolor, sit amet consectetur adipisium dolor, sit amet consectetLorem ipsum dolor, sit amet consectetum nesciunt illum exercitationem.",
  },
  {
    src: "../../../assets/wp.jpg",
    alt: "Don't miss out on your family fall portraits",
    caption:
      "This is the description of slide two Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi quos quas, voluptatusit amet consectetur adipisicing elit. Modi quos quas, voluptatum nesciunt illum exercitationem.",
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
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
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((current) =>
        current === data.length - 1 ? 0 : current + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [handleNextClick, handlePrevClick]);

  return (
    <div className="carousel-container">
      <div
        className="carousel-image"
        style={{ backgroundImage: `url(${data[currentIndex].src})` }}
      ></div>

      <div className="description">
        <h3>{data[currentIndex].alt}</h3>
        <p>{data[currentIndex].caption}</p>
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

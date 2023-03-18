import React from "react";
import "./home.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "./Carousel";

const images = [
  "../../assets/isla.jpg",
  "../../assets/isla2.jpg",
  "../../assets/isla3.jpg",
];

export default function home() {
  return (
    <div className="intro" id="home">
      <div className="booking">
        <Carousel images={images} />
      </div>
    </div>
  );
}

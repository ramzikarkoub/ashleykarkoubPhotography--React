import React from "react";
import "./home.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "./Carousel";

export default function home() {
  return (
    <div className="intro" id="home">
      {/* <div className="booking"> */}
      <Carousel />
      {/* </div> */}
    </div>
  );
}

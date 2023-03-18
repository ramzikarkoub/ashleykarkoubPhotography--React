import React from "react";
import "./home.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Carousel from "./Carousel";

const images = [
  "../../assets/isla.jpg",
  "../../assets/isla2.jpg",
  "../../assets/isla3.jpg",
];

export default function home() {
  return (
    <div className="intro" id="home">
      {/* <img src="../../assets/arr.jpg" alt="" className="object-fit-cover" /> */}
      <div className="booking">
        <Carousel images={images} />
        {/* <div className="newCustomer">
          <h1>
            <span>20% OFF </span>
            <p>for all new customers!!!</p>
            <button onClick={(event) => (window.location.href = "#contact")}>
              Book here!
            </button>
          </h1>
        </div> */}
      </div>
      {/* <OwlCarousel className="owl-carousel owl-theme" loop margin={10} nav>
        <div class="item">
          <h4>hdhdhd</h4>
          <img src="../../assets/isla.jpg" alt="" />
        </div>
        <div class="item">
          <h4></h4>
          <img src="../../assets/isla2.jpg" alt="" />
        </div>
        <div class="item">
          <h4>3</h4>
          <img src="../../assets/isla3.jpg" alt="" />
        </div>
        <div class="item">
          <img src="../../assets/about.webp" alt="" />
          <h4>4</h4>
        </div>
        <div class="item">
          <img src="../../assets/arr.jpg" alt="" />
          <h4>5</h4>
        </div>
        <div class="item">
          <h4>6</h4>
        </div>
        <div class="item">
          <h4>7</h4>
        </div>
        <div class="item">
          <h4>8</h4>
        </div>
        <div class="item">
          <h4>9</h4>
        </div>
        <div class="item">
          <h4>10</h4>
        </div>
        <div class="item">
          <h4>11</h4>
        </div>
        <div class="item">
          <h4>12</h4>
        </div>
      </OwlCarousel> */}
    </div>
  );
}

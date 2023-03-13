import React from "react";
import "./home.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import SocialMedia from "../socialMedia/SocialMedia";

export default function home() {
  return (
    <div className="intro" id="home">
      <img src="../../assets/arr.jpg" alt="" className="object-fit-cover" />
      <div className="booking">
        <div className="newCustomer">
          <h1>
            <span>20% OFF </span>
            <p>for all new customers!!!</p>
            <button onClick={(event) => (window.location.href = "#contact")}>
              Book here!
            </button>
          </h1>
        </div>
      </div>
    </div>
  );
}

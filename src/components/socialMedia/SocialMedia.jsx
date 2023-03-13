import React from "react";
import { SocialIcon } from "react-social-icons";
import "./socialMedia.scss";

export default function SocialMedia() {
  return (
    <div className="socialContainer">
      {/* <a style="color: #3b5998;" href="#!" role="button">
        <SocialIcon url="https://linkedin.com/in/jaketrent" />
      </a>

      <a style="color: #55acee;" href="#!" role="button">
        <SocialIcon url="https://jaketrent.com" network="tumblr" />
      </a>

      <a style="color: #dd4b39;" href="#!" role="button">
        <SocialIcon network="twitter" bgColor="#ff5a01" />
      </a> */}
      <SocialIcon url="https://twitter.com" target="blank" />
      <SocialIcon
        url="https://www.instagram.com/ashleylkphoto/"
        target="_blank"
      />
      <SocialIcon url="https://facebook.com" target="_blank" />
    </div>
  );
}

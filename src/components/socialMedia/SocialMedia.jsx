import React from "react";
import { SocialIcon } from "react-social-icons";
import "./socialMedia.scss";

export default function SocialMedia() {
  return (
    <div className="socialContainer">
      <SocialIcon url="https://twitter.com" target="blank" />
      <SocialIcon
        url="https://www.instagram.com/ashleylkphoto/"
        target="_blank"
      />
      <SocialIcon url="https://facebook.com" target="_blank" />
    </div>
  );
}

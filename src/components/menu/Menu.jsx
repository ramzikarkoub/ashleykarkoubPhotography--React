import React from "react";

import "./menu.scss";

export default function Menu(props) {
  return (
    <div>
      <div className={props.menuOpen ? "menu active" : "menu"}>
        <ul>
          <li onClick={() => props.setMenuOpen(false)}>
            <a href="#home">Home</a>
          </li>
          <li onClick={() => props.setMenuOpen(false)}>
            <a href="#about">About</a>
          </li>
          <li onClick={() => props.setMenuOpen(false)}>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li onClick={() => props.setMenuOpen(false)}>
            <a href="#clientalbums">Clients login</a>
          </li>
          <li onClick={() => props.setMenuOpen(false)}>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

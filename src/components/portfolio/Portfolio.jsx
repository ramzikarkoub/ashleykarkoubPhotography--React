import React from "react";
import "./portfolio.scss";
import { useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import {
  featuredPortfolio,
  weddingsPortfolio,
  familyPortfolio,
  portraitPortfolio,
  couplesPortfolio,
  newbornPortfolio,
} from "../../data.js";
import { useEffect } from "react";

export default function Portfolio() {
  const list = [
    { id: "featured", title: "Featured" },
    { id: "weddings", title: "Weddings" },
    { id: "family", title: "Family" },
    { id: "portrait", title: "Portrait" },
    { id: "couples", title: "Couples" },
    { id: "newborn", title: "New born" },
  ];

  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "weddings":
        setData(weddingsPortfolio);
        break;
      case "family":
        setData(familyPortfolio);
        break;
      case "portrait":
        setData(portraitPortfolio);
        break;
      case "couples":
        setData(couplesPortfolio);
        break;
      case "newborn":
        setData(newbornPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item, index) => (
          <PortfolioList
            id={item.id}
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            key={index}
          />
        ))}
      </ul>

      <div className="container">
        {data.map((d, index) => (
          <div className="item" key={index}>
            <img src={d.img} alt="" />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

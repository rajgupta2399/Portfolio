import React from "react";
import "./portfolio.css";
import { Link } from "react-router-dom";

const PortfolioItem = ({ item }) => {
  return (
    <div className="col-lg-4 col-md-6 portfolio-item filter-app">
      <div className="portfolio-wrap ">
        <div className="image-container">
          <img src={item.img} alt="" className="" />
        </div>
        <div className="portfolio-info">
          <h4>{item.title}</h4>
          <div className="portfolio-links">
            <a href={item.link} target="_blank">
              <i className="bx bx-link"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;

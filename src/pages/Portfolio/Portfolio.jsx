import React, { useState } from "react";
import "./portfolio.css";
import SectionTitle from "../../components/SectionTitle";
import PortfolioItem from "./PortfolioItem";

const Portfolio = ({ refrence }) => {
  const portfolioData = [
    {
      _id: 1,
      img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG5ldGZsaXh8ZW58MHx8MHx8fDA%3D",
      title: "NETLIX",
      brief: "",
      category: "Web App",
      link: "https://imdbmoviesearch.netlify.app",
    },
    {
      _id: 2,
      img: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bmV0ZmxpeHxlbnwwfHwwfHx8MA%3D%3D",
      title: "DIGITAL MARKETING",
      brief: "",
      category: "Web App",
      link: "https://webgrowindia.netlify.app",
    },
    {
      _id: 3,
      img: "https://images.unsplash.com/photo-1653389527532-884074ac1c65?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8em9tYXRvfGVufDB8fDB8fHww",
      title: "FOOD ORDERING APP",
      brief: "",
      category: "Web App",
      link: "https://swiggybyrk.netlify.app",
    },
  ];

  const [data, setData] = useState(portfolioData);

  return (
    <section className="portfolio" id="portfolio" ref={refrence}>
      <div className="container">
        <SectionTitle title="Portfolio" subtitle="My Works" />
        <div className="row">
          <div className="col-lg-12 d-flex justify-content-center"></div>
        </div>
        <div className="row portfolio-container">
          {data.map((item) => (
            <PortfolioItem key={item._id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

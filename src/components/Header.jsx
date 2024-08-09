import React from "react";
import { useState } from "react";
import "./header.css";
import NavListItem from "./NavListItem";
import navListData from "../data/navListData";
import "bootstrap-icons/font/bootstrap-icons.css"; // Import Bootstrap Icons CSS
import SocialLinkItems from "./SocialLinkItems";

function Header({ refrence, sectionActive, aboutActive }) {
  const [navList, setNavList] = useState(navListData);
  const [header, setHeader] = useState(false);

  const handleNavOnClick = (id, target) => {
    if (target === "header") {
      setHeader(false);
    } else {
      setHeader(true);
    }

    if (target === "about") {
      aboutActive(false);
    } else {
      aboutActive(true);
    }
    
    const newNavList = navList.map((nav) => {
      nav.active = false;
      if (nav._id === id) nav.active = true;
      return nav;
    });
    setNavList(newNavList);
    sectionActive(target);
  };

  return (
    <header className={header ? "header-top" : null} id="header" ref={refrence}>
      <div className="container">
        <h1>
          <a href="/">Raj Kumar</a>
        </h1>
        <h2>
          I'm passionate <span>Front-end developer</span> from Delhi
        </h2>
        <nav id="navbar" className="navbar">
          <ul>
            {navList.map((item) => (
              <NavListItem
                key={item._id}
                item={item}
                NavOnClick={handleNavOnClick}
              />
            ))}
          </ul>
        </nav>
        <div className="social-links">
          <SocialLinkItems name="twitter-x" />
          <SocialLinkItems name="whatsapp" />
          <SocialLinkItems name="instagram" />
          <SocialLinkItems name="meta" />
        </div>
      </div>
    </header>
  );
}

export default Header;

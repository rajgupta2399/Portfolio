import React from "react";
import "./SocialLinkItems.css";

const SocialLinkItems = ({ name }) => {
  return (
    <a href="#">
      <i class={`bi bi-${name}`}></i>
    </a>
  );
};

export default SocialLinkItems;

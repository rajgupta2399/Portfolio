import React from "react";
import "./navitemlist.css";

function NavListItem({ item, NavOnClick }) {
  return (
    <li>
      <a
        href="#"
        className={`nav-link ${item.active ? "active" : null}`}
        onClick={() => NavOnClick(item._id, item.target)}
      >
        {item.name}
      </a>
    </li>
  );
}

export default NavListItem;

import React from "react";
import { User, Settings } from "iconoir-react";
const CSS = {
  icon: {
    color: "#f7f9f4",
    width: 26.25,
    height: 30,
    strokeWidth: 2,
  },
};

function Header() {
  return (
    <div className="header-container">
      <ul>
        <li>
          <User color="#f7f9f4" strokeWidth={1} fontSize={26.25} />
        </li>
        <li>
          <Settings color="#f7f9f4" strokeWidth={1} fontSize={26.25} />
        </li>
      </ul>
    </div>
  );
}
export default Header;

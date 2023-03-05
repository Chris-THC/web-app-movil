import React from "react";
import "../Styles/NavPrincipal.css";
const NavPrincipal = ({ texNav }) => {
  return (
    <nav>
      <div>
        <a href="/">{texNav.toUpperCase()}</a>
      </div>
      
    </nav>
  );
};

export default NavPrincipal;

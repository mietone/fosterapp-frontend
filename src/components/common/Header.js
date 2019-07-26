import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const activeStyle = { color: "#7b8db0" };
  return (
    <nav>
      <NavLink to="/" activeStyle={activeStyle} exact>
        Home
      </NavLink>

      {" | "}
      <NavLink to="/kittens" activeStyle={activeStyle} exact>
        Kittens
      </NavLink>

      {" | "}
      <NavLink to="/kitten/:id" activeStyle={activeStyle} exact>
        Kitten
      </NavLink>

      {" | "}
      <NavLink to="/litter/" activeStyle={activeStyle} exact>
        Add Litter
      </NavLink>

      {" | "}
      <NavLink to="/kitten/" activeStyle={activeStyle} exact>
        Add Kitten
      </NavLink>
    </nav>
  );
};

export default Header;

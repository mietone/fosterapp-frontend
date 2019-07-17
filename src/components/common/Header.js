import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const activeStyle = { color: "#7b8db0" };
  return (
    <nav>
      <NavLink to="/" activeStyle={activeStyle} exact>Home</NavLink>{" | "}
      <NavLink to="/kitten/:id" activeStyle={activeStyle} exact>Kitten</NavLink>{" | "}
      <NavLink to="/litter/new" activeStyle={activeStyle} exact>Add Litter</NavLink>
    </nav>
  )

}

export default Header
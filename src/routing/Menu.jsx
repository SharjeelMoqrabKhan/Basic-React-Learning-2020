import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <React.Fragment>
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink exact to="/about">
        About
      </NavLink>
      <NavLink to="/user/sharjeel/riaz">
        Users
      </NavLink>
    </React.Fragment>
  );
};

export { Menu };

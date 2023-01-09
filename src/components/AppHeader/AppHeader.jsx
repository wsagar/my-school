import React from "react";
import { NavLink, useLocation, useRoutes } from "react-router-dom";

/**
 * @author
 * @function AppHeader
 **/

export const AppHeader = (props) => {
  const { pathname } = useLocation();
  console.log(pathname);

  return (
    <header>
      <NavLink
        to="/"
        className={
          pathname === "/home" || pathname === "/" ? "active" : "in-active"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/contactus"
        className={pathname === "/contactus" ? "active" : "in-active"}
      >
        Contact
      </NavLink>
      <NavLink
        to="/about"
        className={pathname === "/about" ? "active" : "in-active"}
      >
        About
      </NavLink>
    </header>
  );
};

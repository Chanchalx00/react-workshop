import React from "react";
import { NavLink, Link } from "react-router-dom";
export const Header = () => {
  return (
    <header className="justify-between flex p-4 bg-gray-800 text-white">
      <div>
        <NavLink to="/">My Store</NavLink>
      </div>
      <nav>
        <div className="flex flex-row space-x-5">
          <NavLink
            to="/"
            className={({ isActive }) => isActive ? "text-sky-500" : ""}
          >
            Home
          </NavLink>
          <NavLink
            to="/productdetails"
            className={({ isActive }) => isActive ? "text-sky-500" : ""}
          >
            ProductDetails
          </NavLink>
          <NavLink to="/about"
            className={({ isActive }) => isActive ? "text-sky-500" : ""}
          >
            About
          </NavLink>
          <NavLink to='/profile'
            className={({ isActive }) => isActive ? "text-sky-500" : ""}
          >
            Profile
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

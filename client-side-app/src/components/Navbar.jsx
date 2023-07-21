import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css"

function Navbar() {
  return (
    <div className="container-fluid d-flex justify-content-around py-3 bg-warning overflow-hidden">
      <div className="mx-3 h3">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Home
        </NavLink>
      </div>
      <div className="mx-3 h3">
        <NavLink
          to="/wordsquiz"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Words Quiz
        </NavLink>
      </div>
      <div className="mx-3 h3">
        <NavLink
          to="/score"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          My Score
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;

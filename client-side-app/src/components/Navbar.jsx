import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="d-flex justify-content-around py-3 bg-warning">
      <div className="mx-3 h3">
        <Link className="text-decoration-none text-black" to={"/"}>
          Home
        </Link>
      </div>
      <div className="mx-3 h3">
        <Link className="text-decoration-none text-black" to={"/wordsquiz"}>
          Words Quiz
        </Link>
      </div>
    </div>
  );
}

export default Navbar;

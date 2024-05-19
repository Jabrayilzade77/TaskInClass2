import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <Link to={"/employee"}>Employee</Link>
      <Link to={"/basket"}>Basket</Link>
      <Link to={"/admin"}>Admin Panel</Link>

    </div>
  );
}

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss"

function Navbar() {
  return (
    <>
     <div className="main_link_a">
     <Link to={"/"} style={{margin:"10px"}}>Home</Link>
      <Link to={"employees"} style={{margin:"10px"}}>Employees</Link>
      <Link to={"/admin"} style={{margin:"10px"}}>Admin Panel</Link>
      <Link to={"*"} style={{margin:"10px"}}>No Page</Link>
     </div>
    </>
  );
}

export default Navbar;

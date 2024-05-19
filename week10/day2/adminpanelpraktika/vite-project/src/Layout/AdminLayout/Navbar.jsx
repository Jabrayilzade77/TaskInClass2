import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.scss"

function Navbar() {
  return (
    <div className='link_a'>
       <Link to={"/"} style={{margin:"10px"}}>MainSite</Link>
      <Link to={"/admin/employee"} style={{margin:"10px"}}>Employeee</Link>
      <Link to={"/admin/add"}>Add Employee</Link>
      <Link to={"/admin/update"}>Update Page</Link>
    </div>
  )
}

export default Navbar
import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar'>
    <Link to={"/"}>MainSite</Link>
    <Link to={"/admin/employees"}>Employees</Link>
    <Link to={"/admin/add"}>Add Employees</Link>
    </div>
  )
}

export default Navbar
import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
        <Link to={"/"}>MainSite</Link>
        <Link to={"employees"}>Employees</Link>
        <Link to={"add"}>Add employee</Link>
  
    </>
  )
}

export default Navbar
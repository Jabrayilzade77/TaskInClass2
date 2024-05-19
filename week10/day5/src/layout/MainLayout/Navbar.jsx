import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
   <>
    <Link to={"/"}> Main Site</Link>
    <Link to={"/employee"}> Employee</Link>
    <Link to={"/admin"}>Admin</Link>

   </>
  )
}

export default Navbar
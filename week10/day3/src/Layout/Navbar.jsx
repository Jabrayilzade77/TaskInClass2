import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
        <Link to={"/"}>Home</Link>
        <Link to={"detail"}>Detail</Link>
    </>
  )
}

export default Navbar
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MainContext } from '../../context/MainProvider'

function NavbarAdmin() {
  const {basket} = useContext(MainContext)
  return (
    <>
        <Link to={"/"}>HomePage</Link>
        <Link to={"/employees"}>Employees</Link>
        <Link to={"/add"}>Add</Link>
        <Link to={"/basket"}>Basket {basket.length}</Link>
        <Link to={"wishlist"}>WishList</Link>
        
    </>
  )
}

export default NavbarAdmin
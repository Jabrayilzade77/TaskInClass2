import React from 'react'
import NavbarAdmin from './NavbarAdmin'
import { Outlet } from 'react-router-dom'

function AdminNavbar() {
  return (
    <>
    <NavbarAdmin></NavbarAdmin>
    <Outlet></Outlet>
    </>
  )
}

export default AdminNavbar
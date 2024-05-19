import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

function AdminLayout() {
  return (
    <>
    <Navbar></Navbar>
    <Outlet></Outlet>
    </>
  )
}

export default AdminLayout
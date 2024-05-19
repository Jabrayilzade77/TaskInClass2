import { Link } from "react-router-dom"

function Navbar() {
  return (
    <>
    <Link to="/">HomePage</Link>
    <Link to="contact">Contact</Link>
    <Link to="profile">ProfilePage</Link>
    <Link to="aboutus">AboutUs</Link>
    <Link to="*">NoPage</Link>
    </>
  )
}

export default Navbar
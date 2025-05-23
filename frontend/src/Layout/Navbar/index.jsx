import React from 'react'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";
import "./style.css"
function Navbar() {
  return (
    <div className='content'>
      <div className='vegefoods'>  <Link className='link' style={{ color: "green" }}>VEGEFOODS</Link></div>
      <div className='menu'><Link className='link'>HOME</Link>
        <Link className='link' to="shop">SHOP</Link>
        <Link className='link' to="about">ABOUT</Link>
        <Link className='link' to="blog">BLOG</Link>
        <Link className='link' to="contact">CONTACT</Link>
        <Link className='link' to="admin">Admin</Link>
        <Link className='link' to="addadmin">AddAdmin</Link>
        <Link className='link'><FaShoppingCart /> [0]</Link></div>
    </div>
  )
}

export default Navbar
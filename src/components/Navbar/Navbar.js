import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <h3 className='logo'>Manurewa Stake</h3>
      <ul className='nav-links'>
        <Link to='/' className='home'>
          <li>Home</li>
        </Link>
        <Link to='/announcement' className='announcement'>
          <li>Announcement</li>
        </Link>
        <Link to='/events' className='events'>
          <li>Events</li>
        </Link>
        <Link to='/contactus' className='contactus'>
          <li>Contact us</li>
        </Link>
      </ul>
      <button className='mobile-icon-menu'>
        <i className='fas fa-bars'></i>
      </button>
    </nav>
  )
}

export default Navbar

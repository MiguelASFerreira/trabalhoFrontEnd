// import React from 'react'
import { Link } from 'react-router-dom'

import './Navbar.css'

const Navbar = () => {
  return (
    <div id='navbar'>
            <Link to='/'>
                <img src="https://dewey.tailorbrands.com/production/brand_version_mockup_image/439/8436526439_02589c6b-4d28-4763-b9b2-c8f3df6c6303.png?cb=1687909447" alt="logo" />
            </Link>
        <nav id='item-navbar'>
            <h2>
                <Link to="/animes">
                    Animes
                </Link>
            </h2>
            <h2>
                <Link to="/mangas">
                    Mangás
                </Link>
            </h2>
        </nav>
    </div>
  )
}

export default Navbar
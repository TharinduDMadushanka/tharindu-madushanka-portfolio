import React from 'react'
import './Navbar.css'

import hide_nav from '../../assets/Navbar/bar.png'

const Navbar = () => {
  return (
    <div>
      <div class=" nav-container container-fluid">

        <nav>
            <h1>TDM</h1>
            <ul id="sidemenu">
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Blog</a></li>
                <li><a href="">Contact</a></li>
            </ul>
        </nav>

        {/* <img src={hide_nav} alt="" /> */}
        </div>
    </div>
  )
}

export default Navbar

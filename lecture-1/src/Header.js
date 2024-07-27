import React from "react";
import logo from "../../images/react-logo.png"

const Header = () => {
    return (
      <header>
        <nav className='nav-bar'>
          <img src={logo} alt="React-Logo" />
          <ul className='nav-item'>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
            <li>Listing</li>
          </ul>
        </nav>
      </header>
    )
  }

  export default Header
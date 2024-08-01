import React from "react";
import react_logo from '../assets/react.svg'


const Navbar = () => {
    return (
        <nav className="nav-bar">
            <img src={react_logo} alt="React-Logo"/>
            <h3>ReactFacts</h3>
            <h4>React Couse Project -1</h4>
        </nav>
    )
}


export default Navbar
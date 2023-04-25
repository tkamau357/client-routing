import React from "react";
import { Link } from "react-router-dom";

const NavBar=()=>{
    console.log("Navbar Page")
  return (
    <div className="nav">
        <ul>
            <li><Link to="/" className="nav-link">Home</Link></li>
            <li><Link to="/About" className="nav-link">About</Link></li>
            <li><Link to="/Contact" className="nav-link">Contact</Link></li>
        </ul>
    </div>
  );
}

export default NavBar;